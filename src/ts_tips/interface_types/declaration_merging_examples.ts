/*
 * 情境一：擴充全域變數 (Global Augmentation)
 * 最常見的例子是擴充 Window 或 ProcessEnv
 */

// 假設我們在專案中會掛載一個全域的 config 物件到 window 上
declare global {
  interface Window {
    __APP_CONFIG__: {
      apiUrl: string;
      version: string;
    };
  }
}

// 使用時，TS 就會知道 window 上有這個屬性
// window.__APP_CONFIG__.apiUrl; // OK

/*
 * 情境二：擴充第三方套件 (Module Augmentation)
 * 當第三方套件的型別定義不夠完整，或是透過 plugin 機制擴充了功能時
 */

// 假設這是一個第三方 library 的 import
// import { AxiosRequestConfig } from 'axios';

// 我們可以透過同名 interface 來擴充它
// declare module 'axios' {
//   interface AxiosRequestConfig {
//     retryCount?: number; // 擴充原本沒有的屬性
//   }
// }

/*
 * 總結：
 * 重複宣告 Interface (Declaration Merging) 主要用於：
 * 1. 擴充既有的型別定義 (特別是那些你無法直接修改源碼的第三方套件)
 * 2. 擴充全域環境 (Global Scopes)
 *
 * 如果是自己專案內的程式碼，通常建議直接在原始 interface 定義中新增屬性，
 * 或是透過 extends 產生新的 interface，比較不會造成維護上的混淆。
 */

export {};
