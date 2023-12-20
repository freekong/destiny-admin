
/** 通用类型 */
declare namespace Common {
  /**
   * 策略模式
   * [状态, 为true时执行的回调函数]
   */
  type StrategyAction = [boolean, () => void];

  /** 选项数据 */
  type OptionWithKey<K> = { value: K; label: string };

  type DialogType = 'add' | 'edit';

  interface IndeterminateObject {
    [key: string]: any
  }

  /** 翻页参数 */
  interface PageInfo {
    currentPage: number;
    pageSize: number;
    totalNum: number;
  }
}

declare namespace Theme {
  /** 主题 */
  type ThemeMode = 'light' | 'dark';

  type AnimationMode = 'zoom-fade' | 'zoom-out' | 'fade-slide' | 'fade' | 'fade-bottom' | 'fade-scale';
}

/** 构建时间 */
declare const PROJECT_BUILD_TIME: string;
