import { YizhongyiComponent } from '../component/lottery/lt11x5/renxuan/yizhongyi/yizhongyi.component';
import { ErzhongerComponent } from '../component/lottery/lt11x5/renxuan/erzhonger/erzhonger.component';
import { SanzhongsanComponent } from '../component/lottery/lt11x5/renxuan/sanzhongsan/sanzhongsan.component';
import { SizhongsiComponent } from '../component/lottery/lt11x5/renxuan/sizhongsi/sizhongsi.component';
import { WuzhongwuComponent } from '../component/lottery/lt11x5/renxuan/wuzhongwu/wuzhongwu.component';
import { LiuzhongwuComponent } from '../component/lottery/lt11x5/renxuan/liuzhongwu/liuzhongwu.component';
import { QizhongwuComponent } from '../component/lottery/lt11x5/renxuan/qizhongwu/qizhongwu.component';
import { BazhongwuComponent } from '../component/lottery/lt11x5/renxuan/bazhongwu/bazhongwu.component';

const Lt11x5ComponentList = [
    YizhongyiComponent, ErzhongerComponent, SanzhongsanComponent, SizhongsiComponent,
    WuzhongwuComponent, LiuzhongwuComponent, QizhongwuComponent, BazhongwuComponent
];
const Lt11x5ComponentMap = [
    {
        '一中一': YizhongyiComponent,
    },
    {
        '二中二': ErzhongerComponent,
    },
    {
        '三中三': SanzhongsanComponent,
    },
    {
        '四中四': SizhongsiComponent,
    },
    {
        '五中五': WuzhongwuComponent,
    },
    {
        '六中五': LiuzhongwuComponent,
    },
    {
        '七中五': QizhongwuComponent,
    },
    {
        '八中五': BazhongwuComponent,
    },
    // YizhongyiComponent, ErzhongerComponent, SanzhongsanComponent, SizhongsiComponent,
    // WuzhongwuComponent, LiuzhongwuComponent, QizhongwuComponent, BazhongwuComponent
];
export { Lt11x5ComponentList, Lt11x5ComponentMap  }



