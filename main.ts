/**
 * BaiBit Control blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace baibit {
    let initflag = 0
    let baibitstrip: neopixel.Strip
    let baibitcolor: number = 255 * 65536 + 255 * 256 + 255
    let baibitbright: number = 10
    let baibitpoint: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    const Icon: string[] = ["<N?N<", "0<6<0", "21248", "A:4:A", "29192", "1:2:1", "1:1:1", "C:3:C", "8:2:8", "0B5B0", "D447G", "HKAKH", "@A2D@", "@O?O@", "676ON", "8NN64", "4?N?4", "4><>4", "KK4KK", "9:L:9", "?FOF?", "02O20", "@O230", "<GOG<", ";IOH8", "HN2>8", "O7M70", "L676L", "33O00", "33O84", "L4O4L", "4>K>4", "26:62", "O9531", ":E:E:", "4:A:4", "04:40", "OAAAO", "0>:>0", "KK4:A"]
    const Allow: string[] = []
    const AlfaStr: string = " !" + '"' + "#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
    const AlfaFont: string[] = ["00000", "0M000", "0H0H0", ":O:O:", ":MEG:", "IB49C", ":EE:1", "0H000", "0>A00", "0A>00", "0:4:0", "04>40", "01200", "04440", "02000", "1248@", ">AA>0", "09O10", "CEE90", "BAEJ0", "6:BO2", "MEEEB", "25=E2", "ABDH@", ":EEE:", "8EFD8", "0:000", "01:00", "04:A0", "0:::0", "0A:40", "8@ED8", ">AEB>", "?DD?0", "OEE:0", ">AAA0", "OAA>0", "OEEAA", "ODD@0", ">AAE6", "O44O0", "AOA00", "BAAN@", "O4:A0", "O1110", "O848O", "O842O", ">AA>0", "ODD80", "<BC=0", "ODD:1", "9EEB0", "@@O@@", "N11N0", "L212L", "O242O", "K44K0", "@878@", "CEIA0", "0OAA0", "@8421", "0AAO0", "08@80", "11111", "0@800", "699?1", "O5520", "69990", "255O0", ">EE90", "4?D@0", "8EEN0", "O4430", "0G000", "011F0", "O4:10", "0N110", "?848?", "?8870", "69960", "?::40", "4::?0", "78880", "15:80", "0N551", ">11?1", "<212<", "?121?", "96690", "95248", "9;=90", "04OA0", "0O000", "AO400", "04422"]
    const KanaStr: string = " ｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ"
    const KanaFont: string[] = ["00000", "25200", "00N@@", "11?00", "21000", "00400", "@DEEN", "8?:<0", "12780", "04=60", "05750", "56?40", "4?460", "55710", "0EEO0", "45240", "44444", "@AFDH", "4478@", "<9I9>", "AAOAA", "9:<O8", "9:L9>", "::O::", "8AABL", "4I9>8", "AAAAO", "8M9N8", "EEA2L", "ABDJA", "8N99=", "H112L", "99EBL", "5EEND", "H1I1N", "5EFD4", "0O420", "99N88", "1AAA1", "AEBBM", "9:K:=", "1124H", "1N0L3", "N9999", "AABDH", "78421", ";8O8;", "@DBEH", "0EEE1", "3=A53", "1:4J0", "DOEEE", "8O8:<", "AAAO1", "EEEEO", "EEEEF", "L111N", "O0O16", "O1116", "OAAAO", "HAAAN", "AAA2L", "000HH", "0008D"]
    let Mode = 0    //0:NeoPixel,1:PIC12F1822,2:
    let ScrollMode = 0    //0:Not Scroll,1:Scroll
    let ScrollSpeed = 500
    /**
     * TODO:BaiBitを初期化する
     */
    //% block
    export function init(): void {
        baibitstrip = neopixel.create(DigitalPin.P12, 25, NeoPixelMode.RGB)
        baibitstrip.clear()
        baibitstrip.setBrightness(baibitbright)
        baibitstrip.show()
    }
    /**
     * TODO:表示を消す
     */
    //% block
    export function clear(): void {
        if (initflag == 0) { init(); initflag = 1 }
        baibitstrip.clear()
        baibitstrip.show()
    }
    /**
     * TODO:NeoPixelに表示する
     */
    //% block
    export function show(): void {
        if (initflag == 0) { init(); initflag = 1 }
        baibitstrip.show()
    }
    /**
     * TODO:LEDを点灯する
     * @param x 横方向。, eg: 0
     * @param y 縦方向。, eg: 0
     */
    //% block
    export function plot(x: number, y: number): void {
        if (initflag == 0) { init(); initflag = 1 }
        baibitpoint[x * 5 + y] = true
        baibitstrip.setPixelColor(x * 5 + y, baibitcolor)
    }
    /**
     * TODO:LEDを消灯する
     * @param x 横方向。, eg: 0
     * @param y 縦方向。, eg: 0
     */
    //% block
    export function unplot(x: number, y: number): void {
        if (initflag == 0) { init(); initflag = 1 }
        baibitpoint[x * 5 + y] = false
        baibitstrip.setPixelColor(x * 5 + y, 0)
    }
    /**
     * TODO:LEDの点灯状態を調べる
     * @param x 横方向。, eg: 0
     * @param y 縦方向。, eg: 0
     */
    //% block
    export function point(x: number, y: number): boolean {
        return baibitpoint[x * 5 + y]
    }
    /**
     * TODO:LEDをの色を設定する
     * @param color 色。, eg: 255
     */
    //% block
    export function color(color: number): void {
        baibitcolor = color
    }
    /**
     * TODO:LEDの明るさを設定する(0~255)
     * @param bright 明るさ(0~255)。, eg: 20
     */
    //% block
    export function brightness(bright: number): void {
        if (initflag == 0) { init(); initflag = 1 }
        baibitbright = bright
        baibitstrip.setBrightness(bright)
    }
    /**
     * TODO:アイコンを表示する
     * @param iconno アイコンの番号。, eg: 1
     */
    //% block
    export function icon(iconno: number): void {
        displayFont(Font2Number(Icon[iconno]))
    }
    /**
     * TODO:フォントを表示する
     * @param フォント 。, eg: 0x12345
     */
    //% block
    export function displayFont(f: number): void {
        for(let x=0;x<5;x++){
            for(let y=0;y<5;y++){
                if ((f & 1 << (x * 5 + y)) != 0) {
                    plot(4 - y, 4 - x)
                } else {
                    unplot(4 - y, 4 - x)
                }
            }
        }
    }
    /**
     * TODO:フォント文字列をビット列に変換する
     * @param f フォント文字列。, eg: ??DD0
     */
    //% block
    export function Font2Number(f: string): number {
        let r = 0
        for (let i = 0; i < 5; i++) {
            r = r << 5 + f.charCodeAt(i) - 0x30
        }
        return r
    }
    /**
     * TODO:文字列を表示する
     * @param pStr 文字列。, eg: "Abcdｱｲｳｴｵ"
     */
    //% block
    export function ShowString(pStr: string): void {
        let sp: number; let ep: number; let i: number; let j: number; let k: number
        let lines: number[] = [0, 0, 0, 0]
        for (i = 0; i < pStr.length; i++) {
            if (i > 0 && ScrollMode != 0) lines.push(0)
            for (j = 0; j < AlfaStr.length; j++) {
                if (pStr.charAt(i) == AlfaStr.charAt(j)) {
                    if (ScrollMode == 0) {
                        sp = 0; ep = 4
                    } else {
                        sp = 5
                        for (k = 0; k < 5; k++) {
                            if (AlfaFont[j].charCodeAt(k) > 0x30) {
                                sp = k; break
                            }
                        }
                        if (sp == 5) sp = 0
                        ep = -1
                        for (k = 4; k >= 0; k--) {
                            if (AlfaFont[j].charCodeAt(k) > 0x30) {
                                ep = k; break
                            }
                        }
                        if (ep == -1) ep = 1
                    }
                    for (k = sp; k <= ep; k++) {
                        lines.push(AlfaFont[j].charCodeAt(k) - 0x30)
                    }
                    break
                }
            }
            for (j = 0; j < KanaStr.length; j++) {
                if (pStr.charAt(i) == KanaStr.charAt(j)) {
                    if (ScrollMode == 0) {
                        sp = 0; ep = 4
                    } else {
                        sp = 5
                        for (k = 0; k < 5; k++) {
                            if (KanaFont[j].charCodeAt(k) > 0x30) {
                                sp = k; break
                            }
                        }
                        if (sp == 5) sp = 0
                        ep = -1
                        for (k = 4; k >= 0; k--) {
                            if (KanaFont[j].charCodeAt(k) > 0x30) {
                                ep = k; break
                            }
                        }
                        if (ep == -1) ep = 1
                    }
                    for (k = sp; k <= ep; k++) {
                        lines.push(KanaFont[j].charCodeAt(k) - 0x30)
                    }
                    break
                }
            }
        }
        if (pStr.length == 1) {
            for (i = 0; i < 5; i++) {
                for (j = 0; j < 5; j++) {
                    if ((lines[i + 4] >>> (4 - j) & 0x01) != 0) plot(i, j)
                    else unplot(i, j)
                }
            }
            show()
        } else if (ScrollMode == 0) {
            for (i = 0; i < Math.trunc(lines.length / 5); i++) {
                for (j = 0; j < 5; j++) {
                    for (k = 0; k < 5; k++) {
                        if ((lines[i * 5 + j + 4] >>> (4 - k) & 0x01) != 0) plot(j, k)
                        else unplot(j, k)
                    }
                }
                baibitstrip.show()
                basic.pause(ScrollSpeed)
            }
        } else {
            for (i = 0; i < 5; i++) lines.push(0)
            for (i = 0; i < lines.length; i++) {
                for (j = 0; j < 5; j++) {
                    if ((lines[i + 4] >>> (4 - j) & 0x01) != 0) plot(4, j)
                    else unplot(4, j)
                }
                baibitstrip.show()
                basic.pause(ScrollSpeed)
                baibitstrip.shift(-5)
            }
        }
    }
    /**
     * TODO:スクロース速度を設定する
     * @param n スクロール速度。, eg: 500
     */
    //% block
    export function SetScrollSpeed(n: number): void {
        ScrollSpeed = n
    }
    /**
     * TODO:スクロースモードを設定する
     * @param n スクロールモード。, eg: 0
     */
    //% block
    export function SetScrollMode(n: number): void {
        ScrollMode = n
    }
    /**
     * TODO:数値を16進形式で表示する
     * @param n 数値。, eg: 0xab30
     */
    //% block
    export function ShowHex(n: number): void {
        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 4; y++) {
                if ((n & 1 << (x * 4 + y)) != 0) {
                    led.plot(4 - y, 4 - x)
                } else {
                    led.unplot(4 - y, 4 - x)
                }
            }
        }
    }
}