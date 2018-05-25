import {
    Component, Input, OnInit, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy,
    ReflectiveInjector
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Lt11x5ComponentMap } from '../../../config/dynamic-component-list';
import { GameBaseService, Lottery } from '../../../share/game-base.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: 'app-11x5',
    templateUrl: './lt11x5.component.html',
    styleUrls: ['./lt11x5.component.css']
})
export class Lt11x5Component implements OnDestroy, OnInit {
    @ViewChild('playContainer', { read: ViewContainerRef }) playContainer: ViewContainerRef;
    compRef: ComponentRef<any>; //  加载的组件实例
    private lottery: Lottery;
    private lotteryID: number;
    showCart: boolean;
    showCartSubscription: Subscription;
    // protected gameConfig: any;
    // public methodList: Array<any>;
    // public currentGameId: number;  // 当前彩种ID
    // public gameName_cn: string; // 当前彩种中文名称
    // public gameName_en: string; // 当前彩种英文名称
    // public currentMethodId: string; // 当前大玩法群ID
    // public currentMethodName_cn: string; // 当前大玩法群ID
    // public currentPlayId: string; // 当前小玩法ID
    // public currentPlayName_cn: string; // 当前小玩法中文名称
    // public currentPlayArr: Array<any>; // 当前小玩法数组
    constructor(private routerIonfo: ActivatedRoute, private resolver: ComponentFactoryResolver, private gameBaseService: GameBaseService) {
        // 购物车面板状态监听
        this.showCart = this.gameBaseService.showCart;
        this.showCartSubscription = this.gameBaseService.showCartObservable
        .subscribe(showCart => {
            this.showCart = showCart;
        });
        this.lottery = gameBaseService.getLottery();
        const gameConfig = {
            lotteryId: '1',
            gameName_cn: '山东11选5',
            gameName_en: 'sd11x5',
            currentNumber: '201805100929',
            currentNumberTime: 1525937335,
            currentTime: 1525937294,
            methodList: [
                {
                    'id': '30',
                    'pid': 0,
                    'name_cn': '三码',
                    'name_en': 'sanma',
                    'children': [{
                        'id': '37',
                        'pid': '30',
                        'name_cn': '直选',
                        'name_en': 'zhixuan',
                        'children': [{
                            'id': '112',
                            'pid': '37',
                            'series_way_id': '112',
                            'name_cn': '前三直选复式',
                            'name_en': 'fushi',
                            'price': '2',
                            'bet_note': '从第一位、第二位、第三位中至少各选择1个号码',
                            'bonus_note': '从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '1930.0000',
                            'max_multiple': 207,
                            'fullname_en': [
                                'sanma',
                                'zhixuan',
                                'fushi'
                            ],
                            'fullname_cn': [
                                '三码',
                                '直选',
                                '前三直选复式'
                            ]
                        },
                        {
                            'id': '95',
                            'pid': '37',
                            'series_way_id': '95',
                            'name_cn': '前三直选单式',
                            'name_en': 'danshi',
                            'price': '2',
                            'bet_note': '手动输入至少3个号码组成一注',
                            'bonus_note': '手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '1930.0000',
                            'max_multiple': 207,
                            'fullname_en': [
                                'sanma',
                                'zhixuan',
                                'danshi'
                            ],
                            'fullname_cn': [
                                '三码',
                                '直选',
                                '前三直选单式'
                            ]
                        }
                        ],
                        'fullname_en': [
                            'sanma',
                            'zhixuan'
                        ],
                        'fullname_cn': [
                            '三码',
                            '直选'
                        ]
                    },
                    {
                        'id': '38',
                        'pid': '30',
                        'name_cn': '组选',
                        'name_en': 'zuxuan',
                        'children': [{
                            'id': '108',
                            'pid': '38',
                            'series_way_id': '108',
                            'name_cn': '前三组选复式',
                            'name_en': 'fushi',
                            'price': '2',
                            'bet_note': '从01-11中任意选择3个或3个以上号码',
                            'bonus_note': '从01-11中共11个号码中选择3个号码，所选号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '321.6837',
                            'max_multiple': 1243,
                            'fullname_en': [
                                'sanma',
                                'zuxuan',
                                'fushi'
                            ],
                            'fullname_cn': [
                                '三码',
                                '组选',
                                '前三组选复式'
                            ]
                        },
                        {
                            'id': '97',
                            'pid': '38',
                            'series_way_id': '97',
                            'name_cn': '前三组选单式',
                            'name_en': 'danshi',
                            'price': '2',
                            'bet_note': '手动输入至少3个号码组成一注',
                            'bonus_note': '手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '321.6837',
                            'max_multiple': 1243,
                            'fullname_en': [
                                'sanma',
                                'zuxuan',
                                'danshi'
                            ],
                            'fullname_cn': [
                                '三码',
                                '组选',
                                '前三组选单式'
                            ]
                        },
                        {
                            'id': '121',
                            'pid': '38',
                            'series_way_id': '121',
                            'name_cn': '前三组选胆拖',
                            'name_en': 'dantuo',
                            'price': '2',
                            'bet_note': '从01-11中，选取3个或3个以上号码进行投注，胆码个数=1个或2个，胆码加拖码个数≥3个',
                            'bonus_note': '分别从胆码和拖码的01-11中，选取3个及以上的号码进行投注，胆码个数=1个或2个，胆码加拖码个数≥3个，所选单注号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '321.6837',
                            'max_multiple': 1243,
                            'fullname_en': [
                                'sanma',
                                'zuxuan',
                                'dantuo'
                            ],
                            'fullname_cn': [
                                '三码',
                                '组选',
                                '前三组选胆拖'
                            ]
                        }
                        ],
                        'fullname_en': [
                            'sanma',
                            'zuxuan'
                        ],
                        'fullname_cn': [
                            '三码',
                            '组选'
                        ]
                    }
                    ],
                    'fullname_en': [
                        'sanma'
                    ],
                    'fullname_cn': [
                        '三码'
                    ]
                },
                {
                    'id': '31',
                    'pid': 0,
                    'name_cn': '二码',
                    'name_en': 'erma',
                    'children': [{
                        'id': '39',
                        'pid': '31',
                        'name_cn': '直选',
                        'name_en': 'zhixuan',
                        'children': [{
                            'id': '111',
                            'pid': '39',
                            'series_way_id': '111',
                            'name_cn': '前二直选复式',
                            'name_en': 'fushi',
                            'price': '2',
                            'bet_note': '从第一位、第二位中至少各选择1个号码',
                            'bonus_note': '从01-11共11个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '214.4400',
                            'max_multiple': 1865,
                            'fullname_en': [
                                'erma',
                                'zhixuan',
                                'fushi'
                            ],
                            'fullname_cn': [
                                '二码',
                                '直选',
                                '前二直选复式'
                            ]
                        },
                        {
                            'id': '94',
                            'pid': '39',
                            'series_way_id': '94',
                            'name_cn': '前二直选单式',
                            'name_en': 'danshi',
                            'price': '2',
                            'bet_note': '手动输入号码，至少输入1个两位数号码组成一注',
                            'bonus_note': '手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '214.4400',
                            'max_multiple': 1865,
                            'fullname_en': [
                                'erma',
                                'zhixuan',
                                'danshi'
                            ],
                            'fullname_cn': [
                                '二码',
                                '直选',
                                '前二直选单式'
                            ]
                        }
                        ],
                        'fullname_en': [
                            'erma',
                            'zhixuan'
                        ],
                        'fullname_cn': [
                            '二码',
                            '直选'
                        ]
                    },
                    {
                        'id': '40',
                        'pid': '31',
                        'name_cn': '组选',
                        'name_en': 'zuxuan',
                        'children': [{
                            'id': '107',
                            'pid': '40',
                            'series_way_id': '107',
                            'name_cn': '前二组选复式',
                            'name_en': 'fushi',
                            'price': '2',
                            'bet_note': '从01-11中任意选择2个或2个以上号码',
                            'bonus_note': '从01-11中共11个号码中选择2个号码，所选号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '107.2279',
                            'max_multiple': 3730,
                            'fullname_en': [
                                'erma',
                                'zuxuan',
                                'fushi'
                            ],
                            'fullname_cn': [
                                '二码',
                                '组选',
                                '前二组选复式'
                            ]
                        },
                        {
                            'id': '96',
                            'pid': '40',
                            'series_way_id': '96',
                            'name_cn': '前二组选单式',
                            'name_en': 'danshi',
                            'price': '2',
                            'bet_note': '手动输入号码，至少输入1个两位数号码组成一注',
                            'bonus_note': '手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '107.2279',
                            'max_multiple': 3730,
                            'fullname_en': [
                                'erma',
                                'zuxuan',
                                'danshi'
                            ],
                            'fullname_cn': [
                                '二码',
                                '组选',
                                '前二组选单式'
                            ]
                        },
                        {
                            'id': '120',
                            'pid': '40',
                            'series_way_id': '120',
                            'name_cn': '前二组选胆拖',
                            'name_en': 'dantuo',
                            'price': '2',
                            'bet_note': '从01-11中，选取2个或2个以上号码进行投注，胆码个数=1个，胆码加拖码个数≥2个',
                            'bonus_note': '分别从胆码和拖码的01-11中，选取2个及以上的号码进行投注，胆码个数=1个，胆码加拖码个数≥2个，所选单注号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '107.2279',
                            'max_multiple': 3730,
                            'fullname_en': [
                                'erma',
                                'zuxuan',
                                'dantuo'
                            ],
                            'fullname_cn': [
                                '二码',
                                '组选',
                                '前二组选胆拖'
                            ]
                        }
                        ],
                        'fullname_en': [
                            'erma',
                            'zuxuan'
                        ],
                        'fullname_cn': [
                            '二码',
                            '组选'
                        ]
                    }
                    ],
                    'fullname_en': [
                        'erma'
                    ],
                    'fullname_cn': [
                        '二码'
                    ]
                },
                {
                    'id': '32',
                    'pid': 0,
                    'name_cn': '不定位',
                    'name_en': 'budingwei',
                    'children': [{
                        'id': '41',
                        'pid': '32',
                        'name_cn': '不定位',
                        'name_en': 'budingwei',
                        'children': [{
                            'id': '122',
                            'pid': '41',
                            'series_way_id': '122',
                            'name_cn': '前三不定位',
                            'name_en': 'budingwei',
                            'price': '2',
                            'bet_note': '从01-11中任意选择1个或1个以上号码',
                            'bonus_note': '从01-11中共11个号码中选择1个号码，每注号码由1个号码组成，只要当期顺利摇出的第一位、第二位、第三位开奖号码中包含所选号码，即为中奖',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '7.1485',
                            'max_multiple': 55955,
                            'fullname_en': [
                                'budingwei',
                                'budingwei',
                                'budingwei'
                            ],
                            'fullname_cn': [
                                '不定位',
                                '不定位',
                                '前三不定位'
                            ]
                        }],
                        'fullname_en': [
                            'budingwei',
                            'budingwei'
                        ],
                        'fullname_cn': [
                            '不定位',
                            '不定位'
                        ]
                    }],
                    'fullname_en': [
                        'budingwei'
                    ],
                    'fullname_cn': [
                        '不定位'
                    ]
                },
                {
                    'id': '33',
                    'pid': 0,
                    'name_cn': '趣味型',
                    'name_en': 'quweixing',
                    'children': [{
                        'id': '47',
                        'pid': '33',
                        'name_cn': '趣味型',
                        'name_en': 'quweixing',
                        'children': [{
                            'id': '109',
                            'pid': '47',
                            'series_way_id': '109',
                            'name_cn': '定单双',
                            'name_en': 'dingdanshuang',
                            'price': '2',
                            'bet_note': '从不同的单双组合中任意选择1个或1个以上的组合',
                            'bonus_note': '从6种单双个数组合中选择1种组合，当期开奖号码的单双个数与所选单双组合一致，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '4.5000',
                            'max_multiple': 88888,
                            'fullname_en': [
                                'quweixing',
                                'quweixing',
                                'dingdanshuang'
                            ],
                            'fullname_cn': [
                                '趣味型',
                                '趣味型',
                                '定单双'
                            ]
                        },
                        {
                            'id': '110',
                            'pid': '47',
                            'series_way_id': '110',
                            'name_cn': '猜中位',
                            'name_en': 'caizhongwei',
                            'price': '2',
                            'bet_note': '从3-9中任意选择1个或1个以上数字',
                            'bonus_note': '从3-9中选择1个号码进行购买，所选号码与5个开奖号码按照大小顺序排列后的第3个号码相同，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '9.0100',
                            'max_multiple': 44395,
                            'fullname_en': [
                                'quweixing',
                                'quweixing',
                                'caizhongwei'
                            ],
                            'fullname_cn': [
                                '趣味型',
                                '趣味型',
                                '猜中位'
                            ]
                        }
                        ],
                        'fullname_en': [
                            'quweixing',
                            'quweixing'
                        ],
                        'fullname_cn': [
                            '趣味型',
                            '趣味型'
                        ]
                    }],
                    'fullname_en': [
                        'quweixing'
                    ],
                    'fullname_cn': [
                        '趣味型'
                    ]
                },
                {
                    'id': '42',
                    'pid': 0,
                    'name_cn': '定位胆',
                    'name_en': 'dingweidan',
                    'children': [{
                        'id': '43',
                        'pid': '42',
                        'name_cn': '定位胆',
                        'name_en': 'dingweidan',
                        'children': [{
                            'id': '106',
                            'pid': '43',
                            'series_way_id': '106',
                            'name_cn': '定位胆',
                            'name_en': 'dingweidan',
                            'price': '2',
                            'bet_note': '从第一位，第二位，第三位任意位置上任意选择1个或1个以上号码',
                            'bonus_note': '从第一位、第二位、第三位任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '21.4456',
                            'max_multiple': 18651,
                            'fullname_en': [
                                'dingweidan',
                                'dingweidan',
                                'dingweidan'
                            ],
                            'fullname_cn': [
                                '定位胆',
                                '定位胆',
                                '定位胆'
                            ]
                        }],
                        'fullname_en': [
                            'dingweidan',
                            'dingweidan'
                        ],
                        'fullname_cn': [
                            '定位胆',
                            '定位胆'
                        ]
                    }],
                    'fullname_en': [
                        'dingweidan'
                    ],
                    'fullname_cn': [
                        '定位胆'
                    ]
                },
                {
                    'id': '34',
                    'pid': 0,
                    'name_cn': '任选',
                    'name_en': 'renxuanfushi',
                    'children': [{
                        'id': '44',
                        'pid': '34',
                        'name_cn': '任选',
                        'name_en': 'renxuanfushi',
                        'children': [{
                            'id': '98',
                            'pid': '44',
                            'series_way_id': '98',
                            'name_cn': '一中一',
                            'name_en': 'renxuanyi',
                            'price': '2',
                            'bet_note': '从01-11中任意选择1个或1个以上号码',
                            'bonus_note': '从01-11共11个号码中选择1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '4.2891',
                            'max_multiple': 93259,
                            'fullname_en': [
                                'renxuanfushi',
                                'renxuanfushi',
                                'renxuanyi'
                            ],
                            'fullname_cn': [
                                '任选',
                                '任选',
                                '一中一'
                            ]
                        },
                        {
                            'id': '99',
                            'pid': '44',
                            'series_way_id': '99',
                            'name_cn': '二中二',
                            'name_en': 'renxuaner',
                            'price': '2',
                            'bet_note': '从01-11中任意选择2个或2个以上号码',
                            'bonus_note': '从01-11共11个号码中选择2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '10.7228',
                            'max_multiple': 37303,
                            'fullname_en': [
                                'renxuanfushi',
                                'renxuanfushi',
                                'renxuaner'
                            ],
                            'fullname_cn': [
                                '任选',
                                '任选',
                                '二中二'
                            ]
                        },
                        {
                            'id': '100',
                            'pid': '44',
                            'series_way_id': '100',
                            'name_cn': '三中三',
                            'name_en': 'renxuansan',
                            'price': '2',
                            'bet_note': '从01-11中任意选择3个或3个以上号码',
                            'bonus_note': '从01-11共11个号码中选择3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '32.1684',
                            'max_multiple': 12434,
                            'fullname_en': [
                                'renxuanfushi',
                                'renxuanfushi',
                                'renxuansan'
                            ],
                            'fullname_cn': [
                                '任选',
                                '任选',
                                '三中三'
                            ]
                        },
                        {
                            'id': '101',
                            'pid': '44',
                            'series_way_id': '101',
                            'name_cn': '四中四',
                            'name_en': 'renxuansi',
                            'price': '2',
                            'bet_note': '从01-11中任意选择4个或4个以上号码',
                            'bonus_note': '从01-11共11个号码中选择4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '128.6735',
                            'max_multiple': 3108,
                            'fullname_en': [
                                'renxuanfushi',
                                'renxuanfushi',
                                'renxuansi'
                            ],
                            'fullname_cn': [
                                '任选',
                                '任选',
                                '四中四'
                            ]
                        },
                        {
                            'id': '102',
                            'pid': '44',
                            'series_way_id': '102',
                            'name_cn': '五中五',
                            'name_en': 'renxuanwu',
                            'price': '2',
                            'bet_note': '从01-11中任意选择5个或5个以上号码',
                            'bonus_note': '从01-11共11个号码中选择5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '900.7143',
                            'max_multiple': 444,
                            'fullname_en': [
                                'renxuanfushi',
                                'renxuanfushi',
                                'renxuanwu'
                            ],
                            'fullname_cn': [
                                '任选',
                                '任选',
                                '五中五'
                            ]
                        },
                        {
                            'id': '103',
                            'pid': '44',
                            'series_way_id': '103',
                            'name_cn': '六中五',
                            'name_en': 'renxuanliu',
                            'price': '2',
                            'bet_note': '从01-11中任意选择6个或6个以上号码',
                            'bonus_note': '投注方案：01 02 03 04 05 06；开奖号码包含01 02 03 04 05，顺序不限，即中任六中五一等奖',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '150.1190',
                            'max_multiple': 2664,
                            'fullname_en': [
                                'renxuanfushi',
                                'renxuanfushi',
                                'renxuanliu'
                            ],
                            'fullname_cn': [
                                '任选',
                                '任选',
                                '六中五'
                            ]
                        },
                        {
                            'id': '104',
                            'pid': '44',
                            'series_way_id': '104',
                            'name_cn': '七中五',
                            'name_en': 'renxuanqi',
                            'price': '2',
                            'bet_note': '从01-11中任意选择7个或7个以上号码',
                            'bonus_note': '从01-11共11个号码中选择6个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '42.8912',
                            'max_multiple': 9325,
                            'fullname_en': [
                                'renxuanfushi',
                                'renxuanfushi',
                                'renxuanqi'
                            ],
                            'fullname_cn': [
                                '任选',
                                '任选',
                                '七中五'
                            ]
                        },
                        {
                            'id': '105',
                            'pid': '44',
                            'series_way_id': '105',
                            'name_cn': '八中五',
                            'name_en': 'renxuanba',
                            'price': '2',
                            'bet_note': '从01-11中任意选择8个或8个以上号码',
                            'bonus_note': '从01-11共11个号码中选择8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '16.0842',
                            'max_multiple': 24869,
                            'fullname_en': [
                                'renxuanfushi',
                                'renxuanfushi',
                                'renxuanba'
                            ],
                            'fullname_cn': [
                                '任选',
                                '任选',
                                '八中五'
                            ]
                        }
                        ],
                        'fullname_en': [
                            'renxuanfushi',
                            'renxuanfushi'
                        ],
                        'fullname_cn': [
                            '任选',
                            '任选'
                        ]
                    }],
                    'fullname_en': [
                        'renxuanfushi'
                    ],
                    'fullname_cn': [
                        '任选'
                    ]
                },
                {
                    'id': '35',
                    'pid': 0,
                    'name_cn': '单式',
                    'name_en': 'renxuandanshi',
                    'children': [{
                        'id': '45',
                        'pid': '35',
                        'name_cn': '单式',
                        'name_en': 'renxuandanshi',
                        'children': [{
                            'id': '86',
                            'pid': '45',
                            'series_way_id': '86',
                            'name_cn': '一中一',
                            'name_en': 'renxuanyi',
                            'price': '2',
                            'bet_note': '手动输入号码，从01-11中任意输入1个号码组成一注',
                            'bonus_note': '从01-11中手动输入1个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '4.2891',
                            'max_multiple': 93259,
                            'fullname_en': [
                                'renxuandanshi',
                                'renxuandanshi',
                                'renxuanyi'
                            ],
                            'fullname_cn': [
                                '单式',
                                '单式',
                                '一中一'
                            ]
                        },
                        {
                            'id': '87',
                            'pid': '45',
                            'series_way_id': '87',
                            'name_cn': '二中二',
                            'name_en': 'renxuaner',
                            'price': '2',
                            'bet_note': '手动输入号码，从01-11中任意输入2个号码组成一注',
                            'bonus_note': '从01-11中手动输入2个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '10.7228',
                            'max_multiple': 37303,
                            'fullname_en': [
                                'renxuandanshi',
                                'renxuandanshi',
                                'renxuaner'
                            ],
                            'fullname_cn': [
                                '单式',
                                '单式',
                                '二中二'
                            ]
                        },
                        {
                            'id': '88',
                            'pid': '45',
                            'series_way_id': '88',
                            'name_cn': '三中三',
                            'name_en': 'renxuansan',
                            'price': '2',
                            'bet_note': '手动输入号码，从01-11中任意输入3个号码组成一注',
                            'bonus_note': '从01-11中手动输入3个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '32.1684',
                            'max_multiple': 12434,
                            'fullname_en': [
                                'renxuandanshi',
                                'renxuandanshi',
                                'renxuansan'
                            ],
                            'fullname_cn': [
                                '单式',
                                '单式',
                                '三中三'
                            ]
                        },
                        {
                            'id': '89',
                            'pid': '45',
                            'series_way_id': '89',
                            'name_cn': '四中四',
                            'name_en': 'renxuansi',
                            'price': '2',
                            'bet_note': '手动输入号码，从01-11中任意输入4个号码组成一注',
                            'bonus_note': '从01-11中手动输入4个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '128.6735',
                            'max_multiple': 3108,
                            'fullname_en': [
                                'renxuandanshi',
                                'renxuandanshi',
                                'renxuansi'
                            ],
                            'fullname_cn': [
                                '单式',
                                '单式',
                                '四中四'
                            ]
                        },
                        {
                            'id': '90',
                            'pid': '45',
                            'series_way_id': '90',
                            'name_cn': '五中五',
                            'name_en': 'renxuanwu',
                            'price': '2',
                            'bet_note': '手动输入号码，从01-11中任意输入5个号码组成一注',
                            'bonus_note': '从01-11中手动输入5个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '900.7143',
                            'max_multiple': 444,
                            'fullname_en': [
                                'renxuandanshi',
                                'renxuandanshi',
                                'renxuanwu'
                            ],
                            'fullname_cn': [
                                '单式',
                                '单式',
                                '五中五'
                            ]
                        },
                        {
                            'id': '91',
                            'pid': '45',
                            'series_way_id': '91',
                            'name_cn': '六中五',
                            'name_en': 'renxuanliu',
                            'price': '2',
                            'bet_note': '手动输入号码，从01-11中任意输入6个号码组成一注',
                            'bonus_note': '从01-11中手动输入6个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '150.1190',
                            'max_multiple': 2664,
                            'fullname_en': [
                                'renxuandanshi',
                                'renxuandanshi',
                                'renxuanliu'
                            ],
                            'fullname_cn': [
                                '单式',
                                '单式',
                                '六中五'
                            ]
                        },
                        {
                            'id': '92',
                            'pid': '45',
                            'series_way_id': '92',
                            'name_cn': '七中五',
                            'name_en': 'renxuanqi',
                            'price': '2',
                            'bet_note': '手动输入号码，从01-11中任意输入7个号码组成一注',
                            'bonus_note': '从01-11中手动输入7个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '42.8912',
                            'max_multiple': 9325,
                            'fullname_en': [
                                'renxuandanshi',
                                'renxuandanshi',
                                'renxuanqi'
                            ],
                            'fullname_cn': [
                                '单式',
                                '单式',
                                '七中五'
                            ]
                        },
                        {
                            'id': '93',
                            'pid': '45',
                            'series_way_id': '93',
                            'name_cn': '八中五',
                            'name_en': 'renxuanba',
                            'price': '2',
                            'bet_note': '手动输入号码，从01-11中任意输入8个号码组成一注',
                            'bonus_note': '从01-11中手动输入8个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖',
                            'is_df2100': 0,
                            'is_enable_extra': '0',
                            'prize': '16.0842',
                            'max_multiple': 24869,
                            'fullname_en': [
                                'renxuandanshi',
                                'renxuandanshi',
                                'renxuanba'
                            ],
                            'fullname_cn': [
                                '单式',
                                '单式',
                                '八中五'
                            ]
                        }
                        ],
                        'fullname_en': [
                            'renxuandanshi',
                            'renxuandanshi'
                        ],
                        'fullname_cn': [
                            '单式',
                            '单式'
                        ]
                    }],
                    'fullname_en': [
                        'renxuandanshi'
                    ],
                    'fullname_cn': [
                        '单式'
                    ]
                },
                // {
                //     'id': '36',
                //     'pid': 0,
                //     'name_cn': '任选胆拖',
                //     'name_en': 'renxuandantuo',
                //     'children': [{
                //         'id': '46',
                //         'pid': '36',
                //         'name_cn': '任选胆拖',
                //         'name_en': 'renxuandantuo',
                //         'children': [{
                //             'id': '113',
                //             'pid': '46',
                //             'series_way_id': '113',
                //             'name_cn': '任选二中二胆拖',
                //             'name_en': 'renxuaner',
                //             'price': '2',
                //             'bet_note': '从01-11中，选取2个及以上的号码进行投注，每注需至少包括1个胆码及1个拖码',
                //             'bonus_note': '从01-11共11个号码中选择2个及以上号码进行投注，每注需至少包括1个胆码及1个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖',
                //             'is_df2100': 0,
                //             'is_enable_extra': '0',
                //             'prize': '10.7228',
                //             'max_multiple': 37303,
                //             'fullname_en': [
                //                 'renxuandantuo',
                //                 'renxuandantuo',
                //                 'renxuaner'
                //             ],
                //             'fullname_cn': [
                //                 '任选胆拖',
                //                 '任选胆拖',
                //                 '任选二中二胆拖'
                //             ]
                //         },
                //         {
                //             'id': '114',
                //             'pid': '46',
                //             'series_way_id': '114',
                //             'name_cn': '任选三中三胆拖',
                //             'name_en': 'renxuansan',
                //             'price': '2',
                //             'bet_note': '从01-11中，选取3个及以上的号码进行投注，每注需至少包括1个胆码及2个拖码',
                //             'bonus_note': '从01-11共11个号码中选择3个及以上号码进行投注，每注需至少包括1个胆码及2个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖',
                //             'is_df2100': 0,
                //             'is_enable_extra': '0',
                //             'prize': '32.1684',
                //             'max_multiple': 12434,
                //             'fullname_en': [
                //                 'renxuandantuo',
                //                 'renxuandantuo',
                //                 'renxuansan'
                //             ],
                //             'fullname_cn': [
                //                 '任选胆拖',
                //                 '任选胆拖',
                //                 '任选三中三胆拖'
                //             ]
                //         },
                //         {
                //             'id': '115',
                //             'pid': '46',
                //             'series_way_id': '115',
                //             'name_cn': '任选四中四胆拖',
                //             'name_en': 'renxuansi',
                //             'price': '2',
                //             'bet_note': '从01-11中，选取4个及以上的号码进行投注，每注需至少包括1个胆码及3个拖码',
                //             'bonus_note': '从01-11共11个号码中选择4个及以上号码进行投注，每注需至少包括1个胆码及3个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖',
                //             'is_df2100': 0,
                //             'is_enable_extra': '0',
                //             'prize': '128.6735',
                //             'max_multiple': 3108,
                //             'fullname_en': [
                //                 'renxuandantuo',
                //                 'renxuandantuo',
                //                 'renxuansi'
                //             ],
                //             'fullname_cn': [
                //                 '任选胆拖',
                //                 '任选胆拖',
                //                 '任选四中四胆拖'
                //             ]
                //         },
                //         {
                //             'id': '116',
                //             'pid': '46',
                //             'series_way_id': '116',
                //             'name_cn': '任选五中五胆拖',
                //             'name_en': 'renxuanwu',
                //             'price': '2',
                //             'bet_note': '从01-11中，选取5个及以上的号码进行投注，每注需至少包括1个胆码及4个拖码',
                //             'bonus_note': '从01-11共11个号码中选择5个及以上号码进行投注，每注需至少包括1个胆码及4个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖',
                //             'is_df2100': 0,
                //             'is_enable_extra': '0',
                //             'prize': '900.7143',
                //             'max_multiple': 444,
                //             'fullname_en': [
                //                 'renxuandantuo',
                //                 'renxuandantuo',
                //                 'renxuanwu'
                //             ],
                //             'fullname_cn': [
                //                 '任选胆拖',
                //                 '任选胆拖',
                //                 '任选五中五胆拖'
                //             ]
                //         },
                //         {
                //             'id': '117',
                //             'pid': '46',
                //             'series_way_id': '117',
                //             'name_cn': '任选六中五胆拖',
                //             'name_en': 'renxuanliu',
                //             'price': '2',
                //             'bet_note': '从01-11中，选取6个及以上的号码进行投注，每注需至少包括1个胆码及5个拖码',
                //             'bonus_note': '从01-11共11个号码中选择6个及以上号码进行投注，每注需至少包括1个胆码及5个拖码。只要当期顺序摇出的5个号码中包含所选单注号码（胆码加拖码），即为中奖',
                //             'is_df2100': 0,
                //             'is_enable_extra': '0',
                //             'prize': '150.1190',
                //             'max_multiple': 2664,
                //             'fullname_en': [
                //                 'renxuandantuo',
                //                 'renxuandantuo',
                //                 'renxuanliu'
                //             ],
                //             'fullname_cn': [
                //                 '任选胆拖',
                //                 '任选胆拖',
                //                 '任选六中五胆拖'
                //             ]
                //         },
                //         {
                //             'id': '118',
                //             'pid': '46',
                //             'series_way_id': '118',
                //             'name_cn': '任选七中五胆拖',
                //             'name_en': 'renxuanqi',
                //             'price': '2',
                //             'bet_note': '从01-11中，选取7个及以上的号码进行投注，每注需至少包括1个胆码及6个拖码',
                //             'bonus_note': '从01-11共11个号码中选择7个及以上号码进行投注，每注需至少包括1个胆码及6个拖码。只要当期顺序摇出的5个号码中包含所选单注号码（胆码加拖码），即为中奖',
                //             'is_df2100': 0,
                //             'is_enable_extra': '0',
                //             'prize': '42.8912',
                //             'max_multiple': 9325,
                //             'fullname_en': [
                //                 'renxuandantuo',
                //                 'renxuandantuo',
                //                 'renxuanqi'
                //             ],
                //             'fullname_cn': [
                //                 '任选胆拖',
                //                 '任选胆拖',
                //                 '任选七中五胆拖'
                //             ]
                //         },
                //         {
                //             'id': '119',
                //             'pid': '46',
                //             'series_way_id': '119',
                //             'name_cn': '任选八中五胆拖',
                //             'name_en': 'renxuanba',
                //             'price': '2',
                //             'bet_note': '从01-11中，选取8个及以上的号码进行投注，每注需至少包括1个胆码及7个拖码',
                //             'bonus_note': '从01-11共11个号码中选择8个及以上号码进行投注，每注需至少包括1个胆码及7个拖码。只要当期顺序摇出的5个号码中包含所选单注号码（胆码加拖码），即为中奖',
                //             'is_df2100': 0,
                //             'is_enable_extra': '0',
                //             'prize': '16.0842',
                //             'max_multiple': 24869,
                //             'fullname_en': [
                //                 'renxuandantuo',
                //                 'renxuandantuo',
                //                 'renxuanba'
                //             ],
                //             'fullname_cn': [
                //                 '任选胆拖',
                //                 '任选胆拖',
                //                 '任选八中五胆拖'
                //             ]
                //         }
                //         ],
                //         'fullname_en': [
                //             'renxuandantuo',
                //             'renxuandantuo'
                //         ],
                //         'fullname_cn': [
                //             '任选胆拖',
                //             '任选胆拖'
                //         ]
                //     }],
                //     'fullname_en': [
                //         'renxuandantuo'
                //     ],
                //     'fullname_cn': [
                //         '任选胆拖'
                //     ]
                // }
            ]
        };
        gameBaseService.setMethodCache(gameConfig.methodList);
        this.lottery.setLotteryId(gameConfig.lotteryId);
        this.lottery.setGameName_cn(gameConfig.gameName_cn);
        this.lottery.setGameName_en(gameConfig.gameName_en);
        this.lottery.setCurrentNumber(gameConfig.currentNumber);
        this.lottery.setCurrentNumberTime(gameConfig.currentNumberTime);
        this.lottery.setCurrentTime(gameConfig.currentTime);
        this.lottery.setCurrentTime(gameConfig.currentTime);
        this.lottery.setMethodList(gameConfig.methodList);
        // 默认玩法配置
        this.lottery.setrCurrentMethodId(gameConfig.methodList[5]['id']);
        this.lottery.setCurrentMethodName_cn(gameConfig.methodList[5]['name_cn']);
        this.lottery.setCurrentPlayId(gameConfig.methodList[5].children[0].children[0]['id']);
        this.lottery.setCurrentPlayName_cn(gameConfig.methodList[5].children[0].children[0]['name_cn']);
    }
    /**
     * 动态创建组件
     */
    createComponent() {
        const currentPlayName_cn = this.lottery.getCurrentPlayName_cn();
        const currentMethodName_cn = this.lottery.getCurrentMethodName_cn();
        console.log(Lt11x5ComponentMap[currentMethodName_cn][currentPlayName_cn]);
        const factory: ComponentFactory<any> =
            this.resolver.resolveComponentFactory(Lt11x5ComponentMap[currentMethodName_cn][currentPlayName_cn]);
        if (this.compRef) {
            this.compRef.destroy();
        }
        this.compRef = this.playContainer && this.playContainer.createComponent(factory); // 创建组件
    }
    /**
     * 监听子组件playID变化
     */
    playChange() {
        this.createComponent();
    }
    ngOnInit() {
        this.routerIonfo.params.subscribe((params: Params) => this.lotteryID = params['lotteryID']);
    }
    ngOnDestroy() {
        if (this.compRef) {
            this.compRef.destroy();
        }
    }
}
