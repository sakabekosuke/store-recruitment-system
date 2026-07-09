/**
 * =====================================================
 * 店舗採用システム
 * Version : 1.0.0
 * File    : 02_onEdit.gs
 * Function: onEdit()
 * =====================================================
 *
 * 【概要】
 * 採用管理シートのステータス変更を監視します。
 *
 * ・最終更新日時更新
 * ・採用結果保存
 * ・採用管理から自動削除
 *
 * 作成：
 * 坂部 公亮
 * =====================================================
 */

function onEdit(e) {

  // ===== 編集シート取得 =====
  const sheet = e.range.getSheet();

  // ===== 採用管理シート以外は終了 =====
  if (sheet.getName() !== SHEET.MANAGE) return;

  // ===== タイトル行は終了 =====
  if (e.range.getRow() === 1) return;

  // ===== ステータス列のみ対象 =====
  if (e.range.getColumn() !== MANAGE_COLUMN.STATUS) return;

  const row = e.range.getRow();
  const status = e.range.getValue();

  // ===== 最終更新日時 =====
  sheet.getRange(row, MANAGE_COLUMN.UPDATED).setValue(new Date());

  // ===== 採用・不採用・辞退以外は終了 =====
  if (![STATUS.HIRED, STATUS.REJECTED, STATUS.DECLINED].includes(status)) {
    return;
  }

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const responseSheet = spreadsheet.getSheetByName(SHEET.RESPONSE);

  if (!responseSheet) {
    throw new Error("応募データシートが見つかりません。");
  }

  const applyDate = sheet.getRange(row, MANAGE_COLUMN.APPLY_DATE).getValue();
  const data = responseSheet.getDataRange().getValues();

  // ===== 応募履歴更新 =====
  for (let i = 1; i < data.length; i++) {

    if (
      data[i][RESPONSE_COLUMN.APPLY_DATE - 1] instanceof Date &&
      applyDate instanceof Date &&
      data[i][RESPONSE_COLUMN.APPLY_DATE - 1].getTime() === applyDate.getTime()
    ) {

      // ===== 採用結果 =====
      responseSheet
        .getRange(i + 1, RESPONSE_COLUMN.RESULT)
        .setValue(status);

      // ===== 結果更新日 =====
      responseSheet
        .getRange(i + 1, RESPONSE_COLUMN.RESULT_DATE)
        .setValue(new Date());

      break;
    }
  }

  // ===== 採用管理から削除 =====
  sheet.deleteRow(row);

}