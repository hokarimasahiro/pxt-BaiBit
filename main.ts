/**
 * BaiBit Control blocks
 */
//% weight=100 color=#0fbc11 icon=""
let baibitstrip: neopixel.Strip
let baibitcolor: number = 255 * 65536 + 255 * 256 + 255
let baibitbright: number = 20
let baipoint: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
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
     * TODO:全てのLEDを
     * @param led フォント。, eg: 0x0CF3FCC
     */
    //% block
    export function allled(led: number): void {
        for (let i = 0; i < 25; i++) {
            if (led & 1 << (24 - i)) {
                baipoint[i] = true
                baibitstrip.setPixelColor(i, baibitcolor)
            } else {
                baipoint[i] = false
                baibitstrip.setPixelColor(i, 0)
            }
        }
        baibitstrip.show()
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
    const baibiticons = [
        0x0CF3FCC,
        0x0061980,
        0x0208888,
        0x1151151,
        0x0248522,
        0x0150941,
        0x0150541,
        0x1350D53,
        0x0850948,
        0x0091640,
        0x14210F7,
        0x18DC778,
        0x1088A90,
        0x10FBFF0,
        0x0639BFE,
        0x08F78C4,
        0x047F9E4,
        0x04731C4,
        0x1BD937B,
        0x0957149,
        0x0FB7ECF,
        0x0017C40,
        0x10F8860,
        0x0CBFEEC,
        0x0BCFF08,
        0x18F09C8,
        0x1F3F4E0,
        0x1C31CDC,
        0x031FC00,
        0x031FD04,
        0x1C27C9C,
        0x0476DC4,
        0x02328C2,
        0x1F49461,
        0x0AAAAAA,
        0x0454544,
        0x0022880,
        0x1F8C63F,
        0x00729C0,
        0x1BD9151]

    const baibitFontsAlfa = [
        0x0000000, // 20
        0x00E8000, // 21
        0x00C0300, // 22
        0x0AFABEA, // 23
        0x0AED6EA, // 24
        0x1991133, // 25
        0x0AAD541, // 26
        0x00C0000, // 27
        0x0074400, // 28
        0x008B800, // 29
        0x0051140, // 2A
        0x0023880, // 2B
        0x0008800, // 2C
        0x0021080, // 2D
        0x0010000, // 2E
        0x0111110, // 2F
        0x0E8C5C0, // 30
        0x004FC20, // 31
        0x13AD520, // 32
        0x128D740, // 33
        0x0654BE2, // 34
        0x1DAD6B2, // 35
        0x022B6A2, // 36
        0x1195310, // 37
        0x0AAD6AA, // 38
        0x08ADA88, // 39
        0x0050000, // 3A
        0x000A800, // 3B
        0x0022A20, // 3C
        0x0052940, // 3D
        0x008A880, // 3E
        0x0885688, // 3F
        0x0E8D64E, // 40
        0x0FA51E0, // 41
        0x1FAD540, // 42
        0x0E8C620, // 43
        0x1F8C5C0, // 44
        0x1FAD631, // 45
        0x1FA5200, // 46
        0x0E8C6A6, // 47
        0x1F213E0, // 48
        0x11FC400, // 49
        0x128C7D0, // 4A
        0x1F22A20, // 4B
        0x1F08420, // 4C
        0x1F4111F, // 4D
        0x1F4105F, // 4E
        0x0E8C5C0, // 4F
        0x1FA5100, // 50
        0x0C94DA0, // 51
        0x1FA5141, // 52
        0x09AD640, // 53
        0x1087E10, // 54
        0x1E087C0, // 55
        0x1C1045C, // 56
        0x1F1105F, // 57
        0x1B21360, // 58
        0x1041D10, // 59
        0x13AE620, // 5A
        0x00FC620, // 5B
        0x1041041, // 5C
        0x008C7E0, // 5D
        0x0044100, // 5E
        0x0108421, //
        0x0082000, // 60
        0x064A5E1, // 61
        0x1F29440, // 62
        0x064A520, // 63
        0x02297E0, // 64
        0x0EAD520, // 65
        0x047D200, // 66
        0x08AD7C0, // 67
        0x1F21060, // 68
        0x00B8000, // 69
        0x00086C0, // 6A
        0x1F22820, // 6B
        0x00F0420, // 6C
        0x0F4110F, // 6D
        0x0F420E0, // 6E
        0x064A4C0, // 6F
        0x0F52880, // 70
        0x04529E0, // 71
        0x0742100, // 72
        0x012A900, // 73
        0x00F14A1, // 74
        0x0E085E1, // 75
        0x0C1044C, // 76
        0x0F0882F, // 77
        0x0931920, // 78
        0x0928888, // 79
        0x095B520, // 7A
        0x0027E20, // 7B
        0x00F8000, // 7C
        0x11F9000, // 7D
        0x0021042] // 7E

    const baibitfontskana = [
        0x0000000, // A0
        0x0228800, // A1
        0x0007A10, // A2
        0x010BC00, // A3
        0x0208000, // A4
        0x0001000, // A5
        0x10A56BE, // A6
        0x087A980, // A7
        0x0111D00, // A8
        0x00234C0, // A9
        0x0029CA0, // AA
        0x0533C80, // AB
        0x04790C0, // AC
        0x0529C20, // AD
        0x00AD7E0, // AE
        0x0428880, // AF
        0x0421084, // B0
        0x108DA98, // B1
        0x0421D10, // B2
        0x0C4E52E, // B3
        0x118FE31, // B4
        0x09533E8, // B5
        0x095712E, // B6
        0x0A57D4A, // B7
        0x088C65C, // B8
        0x04CA5C8, // B9
        0x118C63F, // BA
        0x08EA7C8, // BB
        0x15AC45C, // BC
        0x1195351, // BD
        0x08F252D, // BE
        0x180845C, // BF
        0x094D65C, // C0
        0x05AD7D4, // C1
        0x180E43E, // C2
        0x05ADA84, // C3
        0x00F9040, // C4
        0x094F908, // C5
        0x018C621, // C6
        0x11ACA5D, // C7
        0x0956D4D, // C8
        0x0108898, // C9
        0x01F0383, // CA
        0x1E4A529, // CB
        0x118CA98, // CC
        0x0741041, // CD
        0x0B47D0B, // CE
        0x10A4AB8, // CF
        0x00AD6A1, // D0
        0x036C4A3, // D1
        0x0151340, // D2
        0x14FD6B5, // D3
        0x08FA14C, // D4
        0x118C7E1, // D5
        0x15AD6BF, // D6
        0x15AD6B6, // D7
        0x1C0843E, // D8
        0x1F07C26, // D9
        0x1F08426, // DA
        0x1F8C63F, // DB
        0x188C63E, // DC
        0x118C45C, // DD
        0x0000318, // DE
        0x0000114] // DF

    /**
     * TODO:アイコンを表示する
     * @param iconno アイコンの番号。, eg: 1
     */
    //% block
    export function icon(iconno: number): void {
        allled(baibiticons[iconno])
    }
    /**
     * TODO:文字を表示する
     * @param code 文字コード。, eg: 0x30
     */
    //% block
    export function moji(mojicode: number): void {
        if (mojicode >= 0x20 && mojicode <= 0x7e)
            allled(baibitFontsAlfa[mojicode - 0x20])
    }

}