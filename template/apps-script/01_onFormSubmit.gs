/**
 * ============================================================
 * 店舗採用システム Template
 * 01_onFormSubmit.gs
 * ============================================================
 *
 * 【このファイルについて】
 *
 * Googleフォームから応募が送信された際に、
 * 自動で実行されるスクリプトです。
 *
 * 応募者情報を取得し、
 * 「採用管理」シートへ追加します。
 *
 * 通常、このファイルを編集する必要はありません。
 *
 * ------------------------------------------------------------
 * 【主な処理】
 *
 * ・Googleフォーム回答取得
 * ・応募データ取得
 * ・採用管理へ追加
 * ・初期ステータス設定
 * ・更新日時登録
 *
 * ------------------------------------------------------------
 * 【編集しないでください】
 *
 * ・関数名
 * ・処理の流れ
 * ・列番号
 *
 * 設定変更は
 * 「00_config.gs」
 * で行ってください。
 *
 * ============================================================
 */


/* ============================================================
 * Googleフォーム送信時に実行
 * ============================================================
 *
 * Googleフォームへ応募が送信されると、
 * この関数が自動実行されます。
 *
 */

function onFormSubmit(e) {

  // ==========================================================
  // スプレッドシート取得
  // ==========================================================

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();


  // ==========================================================
  // シート取得
  // ==========================================================

  const responseSheet = spreadsheet.getSheetByName(SHEET.RESPONSE);
  const manageSheet = spreadsheet.getSheetByName(SHEET.MANAGE);

  if (!responseSheet || !manageSheet) {
    throw new Error("必要なシートが見つかりません。");
  }


  // ==========================================================
  // 最新応募データ取得
  // ==========================================================

  const lastRow = responseSheet.getLastRow();


  // ==========================================================
  // 採用管理シートへ追加
  // ==========================================================

  manageSheet.appendRow([

    responseSheet.getRange(lastRow, COLUMN.TIMESTAMP).getValue(),
    responseSheet.getRange(lastRow, COLUMN.NAME).getValue(),
    responseSheet.getRange(lastRow, COLUMN.PHONE).getDisplayValue(),
    responseSheet.getRange(lastRow, COLUMN.ATTRIBUTE).getValue(),
    responseSheet.getRange(lastRow, COLUMN.POSITION).getValue(),

    STATUS.NEW,
    "",
    "",
    new Date()

  ]);


  // ==========================================================
  // メール通知
  // ==========================================================

  if (MAIL.ENABLE) {

    const manageSheetUrl =
      spreadsheet.getUrl() + "#gid=" + manageSheet.getSheetId();

    MailApp.sendEmail({

      to: MAIL.TO.join(","),

      subject: "【店舗採用システム】新しいアルバイト応募がありました",

      body:
`新しいアルバイト応募が届きました。

━━━━━━━━━━━━━━━━━━━━

■ 応募日時
${responseSheet.getRange(lastRow, COLUMN.TIMESTAMP).getDisplayValue()}

■ 氏名
${responseSheet.getRange(lastRow, COLUMN.NAME).getValue()}

■ 属性
${responseSheet.getRange(lastRow, COLUMN.ATTRIBUTE).getValue()}

■ 希望職種
${responseSheet.getRange(lastRow, COLUMN.POSITION).getValue()}

■ 電話番号
${responseSheet.getRange(lastRow, COLUMN.PHONE).getDisplayValue()}

━━━━━━━━━━━━━━━━━━━━

▼ 採用管理シートはこちら
${manageSheetUrl}

※ このメールは店舗採用システムから自動送信されています。`

    });

  }

}


/* ============================================================
 * End of File
 * ============================================================
 */