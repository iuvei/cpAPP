
// 十一选五 任选

import { YizhongyiComponent } from '../component/lottery/lt11x5/renxuan/yizhongyi/yizhongyi.component';
import { ErzhongerComponent } from '../component/lottery/lt11x5/renxuan/erzhonger/erzhonger.component';
import { SanzhongsanComponent } from '../component/lottery/lt11x5/renxuan/sanzhongsan/sanzhongsan.component';
import { SizhongsiComponent } from '../component/lottery/lt11x5/renxuan/sizhongsi/sizhongsi.component';
import { WuzhongwuComponent } from '../component/lottery/lt11x5/renxuan/wuzhongwu/wuzhongwu.component';
import { LiuzhongwuComponent } from '../component/lottery/lt11x5/renxuan/liuzhongwu/liuzhongwu.component';
import { QizhongwuComponent } from '../component/lottery/lt11x5/renxuan/qizhongwu/qizhongwu.component';
import { BazhongwuComponent } from '../component/lottery/lt11x5/renxuan/bazhongwu/bazhongwu.component';

// 十一选五 单式

import { DsyizhongyiComponent } from '../component/lottery/lt11x5/danshi/dsyizhongyi/dsyizhongyi.component';
import { DserzhongerComponent } from '../component/lottery/lt11x5/danshi/dserzhonger/dserzhonger.component';
import { DssanzhongsanComponent } from '../component/lottery/lt11x5/danshi/dssanzhongsan/dssanzhongsan.component';
import { DssizhongsiComponent } from '../component/lottery/lt11x5/danshi/dssizhongsi/dssizhongsi.component';
import { DswuzhongwuComponent } from '../component/lottery/lt11x5/danshi/dswuzhongwu/dswuzhongwu.component';
import { DsliuzhongwuComponent } from '../component/lottery/lt11x5/danshi/dsliuzhongwu/dsliuzhongwu.component';
import { DsqizhongwuComponent } from '../component/lottery/lt11x5/danshi/dsqizhongwu/dsqizhongwu.component';
import { DsbazhongwuComponent } from '../component/lottery/lt11x5/danshi/dsbazhongwu/dsbazhongwu.component';

// 十一选五
const Lt11x5ComponentList = [
    YizhongyiComponent, ErzhongerComponent, SanzhongsanComponent, SizhongsiComponent,
    WuzhongwuComponent, LiuzhongwuComponent, QizhongwuComponent, BazhongwuComponent
];
const Lt11x5ComponentMap = {
    '任选': {
        '一中一': YizhongyiComponent,
        '二中二': ErzhongerComponent,
        '三中三': SanzhongsanComponent,
        '四中四': SizhongsiComponent,
        '五中五': WuzhongwuComponent,
        '六中五': LiuzhongwuComponent,
        '七中五': QizhongwuComponent,
        '八中五': BazhongwuComponent,
    },
    '单式': {
        '一中一': DsyizhongyiComponent,
        '二中二': DserzhongerComponent,
        '三中三': DssanzhongsanComponent,
        '四中四': DssizhongsiComponent,
        '五中五': DswuzhongwuComponent,
        '六中五': DsliuzhongwuComponent,
        '七中五': DsqizhongwuComponent,
        '八中五': DsbazhongwuComponent,
    }
};

export { Lt11x5ComponentList, Lt11x5ComponentMap  }



