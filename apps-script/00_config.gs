/**
 * =====================================================
 * 店舗採用システム
 * Version : 1.0.0
 * File    : 00_config.gs
 * =====================================================
 *
 * 【概要】
 * システム全体で共通利用する設定値を管理します。
 *
 * ・シート名
 * ・ステータス
 * ・列番号
 *
 * 作成：
 * 坂部 公亮
 * =====================================================
 */

// ===== シート名 =====
const SHEET = {
  RESPONSE: "応募データ",
  MANAGE: "採用管理"
};

// ===== ステータス =====
const STATUS = {
  NEW: "未対応",
  CONTACTED: "連絡済",
  INTERVIEW: "面接待ち",
  RESULT: "結果待ち",
  HIRED: "採用",
  REJECTED: "不採用",
  DECLINED: "辞退"
};

// ===== 応募データ列 =====
const RESPONSE_COLUMN = {
  APPLY_DATE: 1,
  NAME: 2,
  ATTRIBUTE: 5,
  PHONE: 6,
  JOB: 8,
  RESULT: 17,
  RESULT_DATE: 18
};

// ===== 採用管理列 =====
const MANAGE_COLUMN = {
  APPLY_DATE: 1,
  NAME: 2,
  PHONE: 3,
  ATTRIBUTE: 4,
  JOB: 5,
  STATUS: 6,
  INTERVIEW: 7,
  MEMO: 8,
  UPDATED: 9
};