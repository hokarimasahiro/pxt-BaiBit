/**
 * BaiBit Control blocks
 */
//% weight=100 color=#0fbc11 icon=""
let baibitstrip: neopixel.Strip
let baibitcolor: number = 255 * 65536 + 255 * 256 + 255
let baibitbright: number = 20
let baipoint: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let baibitIcon: string[] = ["<N?N<", "0<6<0", "21248", "A:4:A", "29192", "1:2:1", "1:1:1", "C:3:C", "8:2:8", "0B5B0", "D447G", "HKAKH", "@A2D@", "@O?O@", "676ON", "8NN64", "4?N?4", "4><>4", "KK4KK", "9:L:9", "?FOF?", "02O20", "@O230", "<GOG<", ";IOH8", "HN2>8", "O7M70", "L676L", "33O00", "33O84", "L4O4L", "4>K>4", "26:62", "O9531", ":E:E:", "4:A:4", "04:40", "OAAAO", "0>:>0", "KK4:A"]
let baibitAllow: string[] = []
let baibitAlfa: string[] = ["00000", "0M000", "0H0H0", ":O:O:", ":MEG:", "IB49C", ":EE:1", "0H000", "0>A00", "0A>00", "0:4:0", "04>40", "01200", "04440", "02000", "1248@", ">AA>0", "09O10", "CEE90", "BAEJ0", "6:BO2", "MEEEB", "25=E2", "ABDH@", ":EEE:", "8EFD8", "0:000", "01:00", "04:A0", "0:::0", "0A:40", "8@ED8", ">AEB>", "?DD?0", "OEE:0", ">AAA0", "OAA>0", "OEEAA", "ODD@0", ">AAE6", "O44O0", "AOA00", "BAAN@", "O4:A0", "O1110", "O848O", "O842O", ">AA>0", "ODD80", "<BC=0", "ODD:1", "9EEB0", "@@O@@", "N11N0", "L212L", "O242O", "K44K0", "@878@", "CEIA0", "0OAA0", "@8421", "0AAO0", "08@80", "11111", "0@800", "699?1", "O5520", "69990", "255O0", ">EE90", "4?D@0", "8EEN0", "O4430", "0G000", "011F0", "O4:10", "0N110", "?848?", "?8870", "69960", "?::40", "4::?0", "78880", "15:80", "0N551", ">11?1", "<212<", "?121?", "96690", "95248", "9;=90", "04OA0", "0O000", "AO400", "04422"]
let baibitKana: string[] = ["00000", "25200", "00N@@", "11?00", "21000", "00400", "@DEEN", "8?:<0", "12780", "04=60", "05750", "56?40", "4?460", "55710", "0EEO0", "45240", "44444", "@AFDH", "4478@", "<9I9>", "AAOAA", "9:<O8", "9:L9>", "::O::", "8AABL", "4I9>8", "AAAAO", "8M9N8", "EEA2L", "ABDJA", "8N99=", "H112L", "99EBL", "5EEND", "H1I1N", "5EFD4", "0O420", "99N88", "1AAA1", "AEBBM", "9:K:=", "1124H", "1N0L3", "N9999", "AABDH", "78421", ";8O8;", "@DBEH", "0EEE1", "3=A53", "1:4J0", "DOEEE", "8O8:<", "AAAO1", "EEEEO", "EEEEF", "L111N", "O0O16", "O1116", "OAAAO", "HAAAN", "AAA2L", "000HH", "0008D"]
namespace baibit {
    /**
     * TODO:BaiBitを初期化する
     */
    //% block
    export function init(): void {
        baibitstrip = neopixel.create(DigitalPin.P12, 25, NeoPixelMode.RGB)
        baibitstrip.setBrightness(baibitbright)
    }
    /**
     * TODO:LEDを点灯する
     * @param x 横方向。, eg: 0
     * @param y 縦方向。, eg: 0
     */
    //% block
    export function plot(x: number, y: number): void {
        baipoint[x * 5 + y] = true
        baibitstrip.setPixelColor(x * 5 + y, baibitcolor)
        baibitstrip.show()
    }
    /**
     * TODO:LEDを消灯する
     * @param x 横方向。, eg: 0
     * @param y 縦方向。, eg: 0
     */
    //% block
    export function unplot(x: number, y: number): void {
        baipoint[x * 5 + y] = false
        baibitstrip.setPixelColor(x * 5 + y, 0)
        baibitstrip.show()
    }
    /**
     * TODO:LEDの点灯状態を調べる
     * @param x 横方向。, eg: 0
     * @param y 縦方向。, eg: 0
     */
    //% block
    export function point(x: number, y: number): boolean {
        return baipoint[x * 5 + y]
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
        baibitbright = bright
        baibitstrip.setBrightness(bright)
    }
    /**
     * TODO:アイコンを表示する
     * @param iconno アイコンの番号。, eg: 1
     */
    //% block
    export function icon(iconno: number): void {
        displayFont(baibitIcon[iconno])
    }
    /**
     * TODO:文字列のフォントをlongに変換する
     * @param FONT 文字列フォント。, eg: "01010"
     */
    //% block
    export function displayFont(font: string): void {
        for (let x = 0; x < 5; x++) {
            let line = font.charCodeAt(x) - 0x30
            for (let y = 0; y < 5; y++) {
                if ((line & (1 << (4 - y))) != 0) {
                    baibitstrip.setPixelColor(x * 5 + y, baibitcolor)
                } else {
                    baibitstrip.setPixelColor(x * 5 + y, 0)
                }
            }
        }
        baibitstrip.show()
    }
    /**
     * TODO:文字を表示する
     * @param code 文字コード。, eg: 0x30
     */
    //% block
    export function moji(mojicode: number): void {
        if (mojicode >= 0x20 && mojicode <= 0x7e) {
            displayFont(baibitAlfa[mojicode - 0x20])
        } else if (mojicode >= 0xa0 && mojicode <= 0xdf){
            displayFont(baibitKana[mojicode - 0xa0])
        }
    }
    /**
     * TODO:文字を表示する
     * @param code 文字コード。, eg: 0x30
     */
    //% block
    export function ShowString(pStr: string): void {
        for (let i = 0; i < pStr.length; i++) {
            moji(pStr.charCodeAt(i))
            basic.pause(500)
        }
    }
    control.inBackground(function () {

    })
}