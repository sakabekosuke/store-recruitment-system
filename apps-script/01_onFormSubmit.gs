/**
 * =====================================================
 * 店舗採用システム
 * Version : 1.0.0
 * File    : 01_onFormSubmit.gs
 * Function: onFormSubmit()
 * =====================================================
 *
 * 【概要】
 * Googleフォーム送信時に応募者情報を採用管理シートへ追加します。
 *
 * 【入力】
 * 応募データ
 *
 * 【出力】
 * 採用管理
 *
 * 作成：
 * 坂部 公亮
 * =====================================================
 */

function onFormSubmit(e) {

  // ===== スプレッドシート取得 =====
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  // ===== シート取得 =====
  const responseSheet = spreadsheet.getSheetByName(SHEET.RESPONSE);
  const manageSheet = spreadsheet.getSheetByName(SHEET.MANAGE);

  if (!responseSheet || !manageSheet) {
    throw new Error("必要なシートが見つかりません。");
  }

  // ===== 最新応募取得 =====
  const lastRow = responseSheet.getLastRow();

  // ===== 採用管理へ追加 =====
  manageSheet.appendRow([

    responseSheet.getRange(lastRow, RESPONSE_COLUMN.APPLY_DATE).getValue(),
    responseSheet.getRange(lastRow, RESPONSE_COLUMN.NAME).getValue(),
    responseSheet.getRange(lastRow, RESPONSE_COLUMN.PHONE).getDisplayValue(),
    responseSheet.getRange(lastRow, RESPONSE_COLUMN.ATTRIBUTE).getValue(),
    responseSheet.getRange(lastRow, RESPONSE_COLUMN.JOB).getValue(),

    STATUS.NEW,
    "",
    "",
    new Date()

  ]);

}