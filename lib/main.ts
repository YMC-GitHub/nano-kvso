// a library package to transform object like nano.flag to string

// recommended-lib-name:kvsoify,nano-flag-transfrom-kvsoify,nano-kvso

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */

/**
 * kvso - key value string in oneline
 * @sample
 * ```
 * // {a:'b',c:1} => 'a=b;c=1'
 * kvsoify({a:'b',c:1},'=;')
 *
 * // {a:'b',c:1} => 'a=b&c=1'
 * kvsoify({a:'b',c:1},'=&')
 *
 * // {a:'b',c:1} => 'a:b,c:1'
 * kvsoify({a:'b',c:1},':,')
 *
 * // {a:'b',c:1} => 'a=b c=1'
 * kvsoify({a:'b',c:1},'= ')
 * ```
 */
export function kvsoify(json: any, sep = "=;") {
  let [kv, kvp] = sep.trim().split("");
  kvp = kvp === undefined ? " " : kvp;
  let res: string = Object.keys(json)
    .map((key) => {
      let val = json[key];
      return `${key}${kv}${val}`;
    })
    .join(kvp);
  return res;
}

export type NanoFlagLike = Record<string, any>;
export interface KvsoPresetOption {
  modeStyle: "cli" | "httpquery" | "switchoption";
  mode: string;
}
export type KvsoPresetOptionLike = Partial<KvsoPresetOption>;
export const builtinKvsoPresetOption = {
  modeStyle: "cli",
  mode: "string",
};

export function uconf(custom?: any, builtin: any = {}) {
  return { ...builtin, ...(custom ? custom : {}) };
}
export function confPreset(options?: KvsoPresetOptionLike): KvsoPresetOption {
  return uconf(options, builtinKvsoPresetOption);
}

/**
 *
 * @sample
 * ```ts
 * let data = {a:'b',c:'d',wd:'d'}
 * // cmd style
 * callPreset(data,{modeStyle:'cli'}) //'-a=b -c=d --wd=d'
 *
 * // web query style
 * callPreset(data,{modeStyle:'httpquery'}) //'a=b&c=d&wd=d'
 *
 * // switch option style
 * callPreset(data,{modeStyle:'switchoption'}) //'a=b;c=d;wd=d'
 * ```
 */
export function callPreset(json: NanoFlagLike, options?: KvsoPresetOptionLike) {
  const option: KvsoPresetOption = confPreset(options);
  let res = "";
  // param json to cli string exp
  // {a:'b',c:'d',wd:'d'}  -> '-a=b -c=d --wd=d'
  if (option.mode === "string" && option.modeStyle === "cli") {
    res = Object.keys(json)
      .map((key) => {
        let val = json[key];
        if (key.length > 1) {
          return `--${key}=${val}`;
        }
        return `-${key}=${val}`;
      })
      .join(" ");
  }

  // param json to httpquery string exp
  if (option.mode === "string" && option.modeStyle === "httpquery") {
    res = kvsoify(json, "=&");
  }
  // param json to swithoption string exp
  if (option.mode === "string" && option.modeStyle === "switchoption") {
    res = kvsoify(json, "=;");
  }
  return res;
}
