// worker.src.js
import { connect } from "cloudflare:sockets";
let password = 'auto';
let proxyIP = '';
// The user name and password do not contain special characters
// Setting the address will ignore proxyIP
// Example:  user:pass@host:port  or  host:port
let socks5Address = '';

let addresses = [
	//当sub为空时启用本地优选域名/优选IP，若不带端口号 TLS默认端口为443，#号后为备注别名
	'cf.090227.xyz:443#加入我的频道t.me/CMLiussss解锁更多优选节点',
	'time.is#你可以只放域名 如下',
	'www.visa.com.sg',
	'skk.moe#也可以放域名带端口 如下',
	'www.wto.org:8443',
	'www.csgo.com:2087#节点名放在井号之后即可',
	'icook.hk#若不带端口号默认端口为443',
	'104.17.152.41#IP也可以',
	'[2606:4700:e7:25:4b9:f8f8:9bfb:774a]#IPv6也OK',
];

let sub = ''; 
let subconverter = 'url.v1.mk';// clash订阅转换后端，目前使用肥羊的订阅转换功能。自带虚假节点信息防泄露
let subconfig = "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"; //订阅配置文件
let RproxyIP = 'false';

let addressesapi = [];
let addressescsv = [];
let DLS = 8;

let FileName = 'epeius';
let BotToken ='';
let ChatID =''; 
let proxyhosts = [];//本地代理域名池
let proxyhostsURL = 'https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/proxyhosts';//在线代理域名池URL
function _0x2f2472(_0x1e52b9,_0x528fc6,_0x4490fd,_0x27d8eb){return _0x4df6(_0x27d8eb-0x380,_0x1e52b9);}(function(_0x3191aa,_0x43c6ce){function _0x4a2d4f(_0x116521,_0x3bd053,_0x5f1915,_0x250fb2){return _0x4df6(_0x3bd053- -0x1bb,_0x5f1915);}function _0x12896d(_0x1d51a2,_0x5ae4ed,_0x1ccda1,_0x5c6890){return _0x4df6(_0x5c6890-0x391,_0x1ccda1);}const _0x9b4727=_0x3191aa();while(!![]){try{const _0x4e1ae3=-parseInt(_0x4a2d4f(0x5d9,0x43d,0x511,0x4ff))/(0x12e7+-0xde3+0x1*-0x503)+parseInt(_0x4a2d4f(-0x7f,0x132,0x7c,-0xc1))/(-0x255*-0x1+0x737+0x6*-0x197)+parseInt(_0x4a2d4f(0x35a,0x314,0x40d,0x125))/(-0x1*0xaff+0x136+-0x39*-0x2c)*(-parseInt(_0x12896d(0x630,0x5a6,0x5ea,0x589))/(-0x68b+0x1003+-0x974))+parseInt(_0x12896d(0x819,0x63b,0x95b,0x6e7))/(-0x1*0x441+-0xd3*-0x7+-0x17f)*(parseInt(_0x12896d(0x653,0x7a8,0x464,0x5c7))/(0xa44+-0x2*0x7ef+0x5a0))+parseInt(_0x4a2d4f(0x614,0x3d8,0x4ed,0x38d))/(-0x5*-0x93+0x42*0x46+-0x14e4*0x1)+parseInt(_0x4a2d4f(0x215,0x3f6,0x410,0x442))/(0x689+-0x650+-0x31*0x1)*(parseInt(_0x4a2d4f(0x51c,0x3fd,0x310,0x51a))/(-0x5e*-0x33+-0xfc6*-0x1+-0x2277))+parseInt(_0x4a2d4f(0x1ba,0x174,0x349,-0x72))/(0x3*0x593+-0x393*0x3+-0x5f6*0x1)*(-parseInt(_0x4a2d4f(0x87,0x41,-0xf3,-0x9c))/(-0xc79+0x48*-0x77+-0x9*-0x51c));if(_0x4e1ae3===_0x43c6ce)break;else _0x9b4727['push'](_0x9b4727['shift']());}catch(_0xfc6b83){_0x9b4727['push'](_0x9b4727['shift']());}}}(_0x5474,0x19876c+-0x24fd*0x57+0x1*0xd814));let fakeUserID,fakeHostName,proxyIPs,sha224Password;const expire=0x68fc*-0x2c535+-0x1f6d*-0xb7aee+0xae9613d6,regex=/^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[.*\]):?(\d+)?#?(.*)?$/;let parsedSocks5Address={},enableSocks=![];export default{async 'fetch'(_0x1c641e,_0xb001e4,_0x4b7d79){const _0x16d9d8={'uoiMT':function(_0x263db6,_0x368861){return _0x263db6!==_0x368861;},'WdUSy':function(_0x32de26,_0x37f224){return _0x32de26(_0x37f224);},'iVVKD':function(_0x19c9a9,_0x4aaa04){return _0x19c9a9===_0x4aaa04;},'ywgyJ':_0x49177b(0x3ef,0x4dd,0x46d,0x65c),'uqeBR':function(_0x2b8cb8,_0x67dd58){return _0x2b8cb8||_0x67dd58;},'zFFrf':function(_0x372fb2,_0x1f8a76){return _0x372fb2===_0x1f8a76;},'gFiny':function(_0x34f581,_0x26d589){return _0x34f581===_0x26d589;},'ssAPL':function(_0x17fdc7,_0x192978){return _0x17fdc7+_0x192978;},'srTkk':_0xbc3c57(0x24e,0x4,0x1d7,0x39f),'zzLXv':_0x49177b(0x45b,0x642,0x332,0x48d),'SihtO':_0x49177b(0x2b9,0x44e,0x404,0x4cf),'DkIlc':function(_0x3704e8,_0x332bd3){return _0x3704e8(_0x332bd3);},'ZHEqt':function(_0x191c93,_0x29b59b){return _0x191c93*_0x29b59b;},'TtIPl':_0xbc3c57(0x41c,0x20c,0x478,0x5aa),'njbrw':_0x49177b(0x136,-0x4c,0x397,0x45),'aPrux':_0x49177b(0x1f9,0x188,0x1b7,0x4a),'UbsZB':_0xbc3c57(0x3ed,0x22b,0x318,0x2c8),'vATRz':'Upgrade','lWnsk':function(_0x3f1226,_0x454a3b){return _0x3f1226(_0x454a3b);},'zLLsU':function(_0x5859f4,_0x41561a){return _0x5859f4(_0x41561a);},'wSVgS':function(_0x3de705,_0x438e3a){return _0x3de705(_0x438e3a);},'luZtk':function(_0x3cde07,_0x1c9a73){return _0x3cde07+_0x1c9a73;},'yoUDo':function(_0x3d640f,_0x77fbc2){return _0x3d640f+_0x77fbc2;},'MoPux':function(_0x100afe,_0x25bb4f){return _0x100afe!==_0x25bb4f;},'WBpNS':_0x49177b(0x2b6,0x26b,0x28e,0x33),'ALpQc':_0x49177b(0x3c5,0x5c5,0x241,0x586),'IvjAC':function(_0x174fd3,_0x28abfa){return _0x174fd3*_0x28abfa;},'NWnXM':function(_0x360774,_0x4bdb58,_0x134986,_0x5cc641,_0x231d7a,_0x2e7d66,_0x32be35){return _0x360774(_0x4bdb58,_0x134986,_0x5cc641,_0x231d7a,_0x2e7d66,_0x32be35);},'Xhcth':_0x49177b(0x233,-0x3e,0x3af,0x5d),'pEBci':_0x49177b(0x6d,0x205,-0xb8,0x27d)+'-SUB','ynuWO':_0x49177b(0x343,0x3dd,0x362,0x59d)+_0x49177b(0x2d6,0x2a9,0x471,0x401),'fzrcg':function(_0x3d164d,_0xf30533){return _0x3d164d+_0xf30533;},'mnghz':function(_0x598276,_0x567269,_0x1211c4,_0x489914,_0x5d5e3e,_0x3bcef7,_0x1441b2){return _0x598276(_0x567269,_0x1211c4,_0x489914,_0x5d5e3e,_0x3bcef7,_0x1441b2);},'SXqwO':function(_0x3b5fcd,_0x1a458e){return _0x3b5fcd*_0x1a458e;},'gaoNn':function(_0xc9aa7f,_0x17368f){return _0xc9aa7f*_0x17368f;},'trCuq':function(_0x5aa218,_0x48a894){return _0x5aa218-_0x48a894;},'xlYdH':function(_0x50344b,_0x3b6c78,_0x28e1f0){return _0x50344b(_0x3b6c78,_0x28e1f0);},'fqtTG':function(_0x443c64,_0x399a7f){return _0x443c64!==_0x399a7f;},'Rywug':'PsrPM','shLhN':_0xbc3c57(0xcc,0x135,0x8f,-0x17d),'qXeyG':function(_0x330970,_0x2bb883,_0x38b38b,_0x4d7eac,_0x2d60a2,_0x4afff2,_0x501248){return _0x330970(_0x2bb883,_0x38b38b,_0x4d7eac,_0x2d60a2,_0x4afff2,_0x501248);},'JwxtH':_0x49177b(0x4ae,0x48f,0x439,0x447),'dnuoE':_0xbc3c57(0x4c3,0x379,0x387,0x44e)+'er','sweFx':_0x49177b(0x9c,0x1b5,0x98,-0xd9),'LZgOT':'Pudyi','vSxPV':_0xbc3c57(0x219,-0x16b,0x63,0xdd)+_0x49177b(0x5c,-0x218,0x26f,-0xfe)+_0xbc3c57(0xd7,0x1b8,0x7b,-0x1f2),'lRQvx':_0x49177b(0x331,0x436,0x1e4,0x59a),'rCvhh':_0x49177b(0x20f,0x197,0x357,0x32c),'wZHBI':function(_0x44a541,_0x8d2d68){return _0x44a541(_0x8d2d68);},'JCoap':_0x49177b(0x146,0x16f,-0xbc,0x1c1),'EEMeZ':_0xbc3c57(0x468,0x35e,0x2ab,0x528),'bXyeH':function(_0x2bb5af,_0x59aaa5){return _0x2bb5af==_0x59aaa5;},'ZPRNu':_0xbc3c57(-0x57,0x321,0x106,0x312)+_0xbc3c57(-0xe2,0x11b,0x199,0x2f5)+'o','SAuSU':'socks5','abDfb':_0x49177b(0x3af,0x36a,0x2ce,0x609),'ImVtW':_0x49177b(0x392,0x123,0x3e7,0x1b7),'rsBIa':_0xbc3c57(0x2e3,0x577,0x449,0x417),'LKGvn':_0x49177b(0x99,0x256,0x18e,0xab),'eythi':_0x49177b(0x3d3,0x1ab,0x543,0x44b),'JEvYC':_0xbc3c57(0x254,0x452,0x283,0x3f8),'FJAGA':function(_0x13b638,_0x394de2){return _0x13b638===_0x394de2;},'YeGRB':'TailK'};function _0xbc3c57(_0x2d9e6c,_0x1c4d20,_0x15eba7,_0x3e51c3){return _0x4df6(_0x15eba7- -0x14b,_0x1c4d20);}function _0x49177b(_0x19e3ed,_0x10a9f4,_0x8b8f31,_0x311650){return _0x4df6(_0x19e3ed- -0x127,_0x8b8f31);}try{if(_0x16d9d8[_0x49177b(0x319,0xed,0x4e4,0x213)](_0x16d9d8['srTkk'],_0x49177b(0x464,0x5da,0x6a1,0x387))){const _0x18d82f=_0x1c641e[_0x49177b(0x230,0x29,0x4a5,0x43e)][_0xbc3c57(0x4e7,0x28b,0x396,0x5be)](_0x16d9d8[_0x49177b(0x4fe,0x545,0x388,0x2f9)])||_0x16d9d8[_0x49177b(0x3ed,0x63f,0x380,0x312)],_0x1f387f=_0x18d82f[_0x49177b(0x196,0x190,0x28e,0x23f)+'e']();proxyIP=_0xb001e4[_0xbc3c57(0x178,0x30a,0xd0,0xa9)]||proxyIP,proxyIPs=await _0x16d9d8[_0xbc3c57(0x213,0x43,0x166,0x126)](ADD,proxyIP),proxyIP=proxyIPs[Math[_0xbc3c57(0xcd,0x235,0x1e,-0xf4)](_0x16d9d8['ZHEqt'](Math[_0x49177b(0x250,0x401,0x177,0x3c1)](),proxyIPs[_0xbc3c57(0x297,-0x111,0x50,0x200)]))],socks5Address=_0xb001e4[_0xbc3c57(0x279,0xe6,0x4f,-0xd3)]||socks5Address;if(socks5Address)try{if(_0x16d9d8[_0x49177b(0x84,-0x19a,0x5,0x1e3)](_0x16d9d8[_0x49177b(0x7e,-0x23,0x13d,-0x68)],_0x16d9d8['njbrw'])){const _0x65cb48=_0x13ef5d[_0x49177b(0x251,0xbb,0x269,0x324)](':');if(_0x16d9d8[_0x49177b(0x319,0x511,0x1ec,0x185)](_0x65cb48['length'],-0x10a7+0x9a3*-0x2+0x23ef*0x1))throw new _0x496096(_0x49177b(0x445,0x3f1,0x531,0x248)+_0x49177b(0x3e4,0x32a,0x2cb,0x417)+_0xbc3c57(0x119,0xb2,0x239,0x27f));[_0x63b3c4,_0x59d590]=_0x65cb48;}else parsedSocks5Address=_0x16d9d8[_0x49177b(0x18a,0x308,0x219,0x293)](socks5AddressParser,socks5Address),RproxyIP=_0xb001e4[_0x49177b(0x19f,0xb3,-0xad,0x2f7)]||_0x16d9d8['aPrux'],enableSocks=!![];}catch(_0x4629f0){let _0x41c96c=_0x4629f0;console[_0x49177b(0xbd,-0x6d,-0x1b6,0x55)](_0x41c96c[_0x49177b(0x4ba,0x659,0x33f,0x504)]()),RproxyIP=_0xb001e4[_0x49177b(0x19f,0x13,0x33f,0x12b)]||!proxyIP?_0xbc3c57(0x4a9,0x1d6,0x318,0x51f):_0x16d9d8[_0xbc3c57(-0x98,0x1d0,0x58,0x178)],enableSocks=![];}else RproxyIP=_0xb001e4['RPROXYIP']||!proxyIP?_0x16d9d8[_0xbc3c57(0x2b0,0x2a8,0x66,0x1be)]:_0x16d9d8[_0xbc3c57(0x2c2,0x39,0x58,-0x9a)];password=_0xb001e4[_0x49177b(0x4b8,0x46e,0x66f,0x433)]||password,sha224Password=_0xb001e4[_0x49177b(0x3b1,0x206,0x377,0x235)]||_0xb001e4[_0x49177b(0xb4,0x27b,-0x24,0x289)]||sha256['sha224'](password);const _0x4e3185=new URL(_0x1c641e[_0xbc3c57(0x74e,0x3d2,0x4ec,0x498)]),_0xe7b941=_0x1c641e['headers'][_0xbc3c57(0x4f5,0x548,0x396,0x3b3)](_0x16d9d8['vATRz']);if(_0xb001e4[_0x49177b(0xbe,0xde,-0x114,0x323)])addresses=await _0x16d9d8['lWnsk'](ADD,_0xb001e4[_0x49177b(0xbe,0x58,0x152,0x135)]);if(_0xb001e4['ADDAPI'])addressesapi=await _0x16d9d8[_0x49177b(0x43f,0x357,0x2f5,0x3a5)](ADD,_0xb001e4['ADDAPI']);if(_0xb001e4[_0x49177b(0x9b,0x157,-0x3a,-0x180)])addressescsv=await _0x16d9d8['wSVgS'](ADD,_0xb001e4[_0xbc3c57(0x12,0x167,0x77,-0x1a0)]);DLS=_0xb001e4[_0xbc3c57(-0x28,0x364,0x153,0x5f)]||DLS,BotToken=_0xb001e4[_0xbc3c57(0x276,0x6fa,0x4b4,0x5f9)]||BotToken,ChatID=_0xb001e4[_0x49177b(0x506,0x4a9,0x400,0x2bd)]||ChatID,sub=_0xb001e4[_0xbc3c57(0x504,0x59b,0x3b3,0x53e)]||sub,subconverter=_0xb001e4['SUBAPI']||subconverter,subconfig=_0xb001e4[_0x49177b(0x3a,0x210,0xf5,0x3b)]||subconfig,FileName=_0xb001e4['SUBNAME']||FileName,RproxyIP=_0xb001e4['RPROXYIP']||!proxyIP?'true':_0x16d9d8[_0xbc3c57(0x15e,0x1b5,0x58,-0x98)];const _0x5f5828=new Date();_0x5f5828['setHours'](-0x71*0x17+-0x237a+0x2da1,-0x1350+0x1*0x119b+-0x1b5*-0x1,-0x1d82+-0xd4a+0x2acc,0x1*-0x1d41+-0x2ce*0x2+0x77*0x4b);const _0x3a087b=Math[_0x49177b(0x32b,0x5a5,0x1de,0x2f5)](_0x5f5828[_0x49177b(0x2da,0x5d,0x8c,0x402)]()/(-0x878+-0x22a*-0xd+-0xfc2)),_0x112a1a=await MD5MD5(''+password+_0x3a087b);fakeUserID=_0x16d9d8[_0x49177b(0x26a,0x3d,0xf0,0x2d2)](_0x16d9d8[_0x49177b(0x50a,0x721,0x39e,0x74e)](_0x16d9d8[_0xbc3c57(0x36,0x471,0x246,0x381)](_0x16d9d8[_0x49177b(0x26a,0x41a,0x7b,0x118)](_0x16d9d8['ssAPL'](_0x16d9d8[_0x49177b(0x50a,0x3da,0x509,0x335)](_0x112a1a[_0xbc3c57(0x62f,0x334,0x4ae,0x552)](0x1e9a+-0x2543*-0x1+-0x43dd,0x1d14+-0x1dd8+0x22*0x6)+'-',_0x112a1a[_0x49177b(0x4d2,0x4f1,0x46a,0x399)](0xc79+0xaa8+-0x49*0x51,0xc6d+0xe83*0x1+-0x1ae4)),'-')+_0x112a1a[_0x49177b(0x4d2,0x416,0x39a,0x505)](0x1*0x121c+-0xb*0x14d+-0x1f*0x1f,0xc00+0x24a9+-0x3099),'-'),_0x112a1a[_0x49177b(0x4d2,0x3b6,0x3c6,0x6df)](-0x447*0x7+-0x508+-0x1*-0x2309,-0x10d3+0xb6e+0x579)),'-'),_0x112a1a['slice'](-0x2485+-0x501+0x299a)),fakeHostName=_0x16d9d8['yoUDo'](_0x112a1a['slice'](0x3ef+-0x55*-0x8+-0x691,-0x1fb8*0x1+0x1732+-0x7*-0x139)+'.',_0x112a1a[_0x49177b(0x4d2,0x616,0x602,0x50f)](-0x2621+0x1*0xe5+0x2549,-0x1039+-0x1b83+0x1*0x2bcf));if(!_0xe7b941||_0x16d9d8['MoPux'](_0xe7b941,_0x16d9d8[_0x49177b(0x3bc,0x274,0x3f2,0x2d6)]))switch(_0x4e3185[_0xbc3c57(0x28d,0x293,0xf4,0x48)]){case'/':const _0x3d575a=_0xb001e4[_0xbc3c57(0x2ce,0x1cb,0x3a1,0x4ea)]?_0x16d9d8[_0xbc3c57(0x87,-0x1aa,0x93,0x306)]:_0xb001e4[_0xbc3c57(-0x104,0x3e,0x84,0x252)]?_0x49177b(0xa8,0x293,0x22b,0xa5):null;if(_0x3d575a){const _0x100bd0=await ADD(_0xb001e4[_0x3d575a]),_0x20583d=_0x100bd0[Math['floor'](_0x16d9d8[_0x49177b(0x4e8,0x431,0x30c,0x563)](Math[_0xbc3c57(0x25a,0x30a,0x22c,0x33c)](),_0x100bd0[_0xbc3c57(-0x20d,0x253,0x50,-0xcd)]))];return _0x3d575a===_0x16d9d8[_0xbc3c57(0x1f8,0x2e5,0x93,-0x1e)]?Response[_0xbc3c57(0x269,0x86,0x2e,0x1e4)](_0x20583d,0xe8a*0x2+0x21b3*-0x1+0x5cd):_0x16d9d8[_0xbc3c57(0x408,0x1d6,0x1af,0x331)](fetch,new Request(_0x20583d,_0x1c641e));}const _0x3766cb={};_0x3766cb[_0x49177b(0x47c,0x661,0x3d8,0x6ab)]=0xc8;return new Response(JSON[_0x49177b(0x2ef,0x3eb,0x12c,0x52f)](_0x1c641e['cf'],null,0x35*0x29+-0x2d9*0x1+-0x5a0),_0x3766cb);case'/'+fakeUserID:const _0x1c6269=await _0x16d9d8['NWnXM'](getTrojanConfig,password,_0x1c641e['headers'][_0x49177b(0x3ba,0x343,0x548,0x368)](_0x16d9d8['Xhcth']),sub,_0x16d9d8[_0x49177b(0x411,0x1a4,0x2d5,0x3ac)],RproxyIP,_0x4e3185),_0x2224e6={};_0x2224e6[_0xbc3c57(0x643,0x297,0x458,0x38b)]=0xc8;return new Response(''+_0x1c6269,_0x2224e6);case'/'+password:await sendMessage('#获取订阅\x20'+FileName,_0x1c641e[_0xbc3c57(0x280,0x11c,0x20c,0x31f)][_0x49177b(0x3ba,0x5de,0x13c,0x21b)](_0x16d9d8[_0x49177b(0x31a,0x2a3,0x437,0x326)]),_0x49177b(0x103,0x1e5,-0x142,0x1af)+_0x18d82f+('</tg-spoil'+_0x49177b(0x36b,0x40e,0x26b,0x135))+_0x4e3185[_0x49177b(0x471,0x672,0x340,0x5d6)]+('\x0a<tg-spoil'+'er>入口:\x20')+_0x16d9d8[_0x49177b(0x4d4,0x474,0x250,0x50b)](_0x4e3185[_0x49177b(0x118,0x380,0x16b,0x2b2)],_0x4e3185[_0xbc3c57(0x2b5,-0xa0,0x188,0x138)])+(_0xbc3c57(0x240,0x1b7,0xb3,0x1be)+_0xbc3c57(0x111,-0x16,0x4e,0x50)));const _0x3d4f32=await _0x16d9d8[_0xbc3c57(0x53,0x112,0x15c,-0x93)](getTrojanConfig,password,_0x1c641e[_0xbc3c57(0xb3,0x399,0x20c,0xb4)][_0x49177b(0x3ba,0x190,0x3a9,0x59f)]('Host'),sub,_0x18d82f,RproxyIP,_0x4e3185),_0x276a6a=Date['now'](),_0x417f3e=new Date(_0x276a6a);_0x417f3e[_0xbc3c57(0x3f9,0x2e2,0x17f,0x164)](0x3*-0x10+0x6*-0x1c7+0xada,0x1*-0x1d44+-0x1*-0xf27+0xe1d*0x1,0xb*0x2a6+-0x9*-0xe1+-0x250b,0x3*-0x577+-0x7f4*0x3+0x479*0x9);const _0x2c4b38=Math[_0x49177b(0x42,0x17e,0x79,-0x200)](_0x16d9d8[_0xbc3c57(0x308,0x1d2,0x2bf,0x307)](_0x16d9d8[_0xbc3c57(0x4b6,0x4dd,0x287,0x48f)](_0x16d9d8[_0xbc3c57(-0x11d,0x294,0x18,-0x6)](_0x276a6a,_0x417f3e[_0x49177b(0x2da,0xe0,0x133,0x30a)]())/(0x2*0x1ca2346+-0x1b8d3af+0x34ae923),-0xaa2*-0x1+0x7e8+-0x1272),0x1ad9830ec00+-0xb8d98*-0x2bd880+0x2a825f7f8*-0x100)/(-0x1*-0x3e9+0x1b87+-0x1f6e));let _0x48aed0=_0x2c4b38,_0x1bb8d1=_0x2c4b38,_0xabf085=(0x5b*-0x1d+-0x239a+0x2e01)*(0x4d573300*-0x1b0+-0x4fa38bc00+0x1877d5ecc00);if(_0xb001e4[_0xbc3c57(-0x3e,0x469,0x215,0x342)]&&_0xb001e4[_0xbc3c57(0x265,-0x1c9,0x6f,-0x10f)]){const _0x50d7ff=_0xb001e4['CFEMAIL'],_0x2d9f49=_0xb001e4[_0xbc3c57(0xc9,0x258,0x6f,-0x51)],_0x2c3814=_0xb001e4[_0x49177b(0xc2,0xbc,-0x58,0xcc)]||0x33e+0x533*0x1+0x1*-0x871,_0x1221aa=await _0x16d9d8[_0xbc3c57(0x598,0x3da,0x4f5,0x369)](getAccountId,_0x50d7ff,_0x2d9f49);if(_0x1221aa){if(_0x16d9d8['fqtTG'](_0x16d9d8[_0x49177b(0x51f,0x72e,0x311,0x48f)],_0x16d9d8[_0xbc3c57(0x181,0x31f,0x3a3,0x1af)])){const _0x4e2ddf=new Date();_0x4e2ddf[_0xbc3c57(0x572,0x400,0x32f,0x3bb)+'s'](0x12c3+0x1*0x2585+-0x3848,-0x1c5e+-0x3c5*-0x8+-0x1ca,0x9a*0x4+0x1*0xf9b+-0x35*0x57,-0x162*-0x12+0xa1c+-0x2300);const _0x582e54=_0x4e2ddf[_0x49177b(0x409,0x578,0x610,0x415)+'g'](),_0x50daff=new Date()[_0xbc3c57(0x19a,0x495,0x3e5,0x505)+'g'](),_0x44c155=await _0x16d9d8[_0x49177b(0x492,0x478,0x5c0,0x303)](getSum,_0x1221aa,_0x2c3814,_0x50d7ff,_0x2d9f49,_0x582e54,_0x50daff);_0x48aed0=_0x44c155[0x214f+-0x16b5+-0xa9a],_0x1bb8d1=_0x44c155[0x1*0x1aff+-0x13c7+-0x737*0x1],_0xabf085=0x6be6+0x1*0x1b5e+0x1*0x108bc;}else _0x16d9d8[_0xbc3c57(0x39d,-0x3a,0x1af,0xf7)](_0x329556,'readableWe'+_0xbc3c57(0x11a,0x439,0x2f8,0x460)+'eam\x20is\x20clo'+_0x49177b(0x232,0x225,0x3ca,0x441));}}if(_0x1f387f&&(_0x1f387f[_0xbc3c57(0x431,-0x92,0x1b1,0x1b2)](_0x16d9d8[_0xbc3c57(0xd6,0x3e8,0x2ea,0x39d)])||_0x1f387f[_0x49177b(0x1d5,0x204,0x3ba,0x219)](_0x16d9d8[_0xbc3c57(0x453,0x2de,0x2a0,0x41a)]))){if(_0x16d9d8[_0x49177b(0x145,0x78,0x1ea,0x248)](_0x16d9d8[_0x49177b(0x516,0x6e1,0x3fc,0x305)],_0x16d9d8[_0x49177b(0x3d0,0x4cd,0x38d,0x573)])){const _0x2a5567={};_0x2a5567[_0xbc3c57(-0x2c,0x115,0x171,-0x16)+'pe']=_0x16d9d8[_0xbc3c57(0x29c,0x1f3,0x2a9,0x413)],_0x2a5567[_0xbc3c57(0x13d,0x31,0x44,0x147)+'date-Inter'+_0x49177b(0x242,0x250,0x351,0x2ea)]='6',_0x2a5567['Subscripti'+_0xbc3c57(0x185,0x1fb,0x1d4,0x257)+'o']=_0x49177b(0x21c,0x37f,0x25b,0x4c)+_0x48aed0+(_0xbc3c57(0x2c8,0x2ae,0x131,-0x92)+'=')+_0x1bb8d1+_0xbc3c57(0x518,0x683,0x4b3,0x40b)+_0xabf085+_0xbc3c57(0xff,0x1e2,0x1c,0xbc)+expire;const _0x3d869f={};return _0x3d869f[_0x49177b(0x47c,0x261,0x573,0x3c1)]=0xc8,_0x3d869f[_0x49177b(0x230,0x2f7,0x257,0x336)]=_0x2a5567,new Response(''+_0x3d4f32,_0x3d869f);}else{const _0x619ec0={'hCghD':function(_0x3ceb1c,_0x5d6ca0){function _0x5211c7(_0xab2c38,_0x1ba71e,_0x2a3518,_0x1884fb){return _0x49177b(_0x1ba71e-0x370,_0x1ba71e-0x35,_0x1884fb,_0x1884fb-0xdc);}return _0x16d9d8[_0x5211c7(0x521,0x714,0x6b2,0x6fe)](_0x3ceb1c,_0x5d6ca0);},'lubfl':_0x16d9d8[_0xbc3c57(0x250,0xfa,0x33,-0x96)]};_0x29cf4a['isView']=function(_0x3488f4){function _0x11dc3b(_0x367b68,_0x1d8009,_0x2b5881,_0x5c4f94){return _0x49177b(_0x2b5881-0x230,_0x1d8009-0x1a8,_0x1d8009,_0x5c4f94-0x80);}function _0x4162bd(_0x171755,_0x5c62c6,_0x3ae084,_0x46b150){return _0x49177b(_0x3ae084- -0x1bf,_0x5c62c6-0x34,_0x46b150,_0x46b150-0x1ce);}return _0x619ec0[_0x4162bd(0x87,-0x1cd,0xa7,0x236)](typeof _0x3488f4,_0x619ec0[_0x4162bd(-0x165,0x1ba,-0x62,-0x2b3)])&&_0x3488f4[_0x11dc3b(0x521,0x25f,0x46e,0x430)]&&_0x619ec0[_0x4162bd(-0xf2,-0x4c,0xa7,-0x151)](_0x3488f4[_0x4162bd(-0xf,0x182,0x7f,0x40)][_0x4162bd(-0x1d5,-0x223,-0x3a,0xc0)+'r'],_0xce7b02);};}}else{if(_0x16d9d8[_0x49177b(0x84,0x157,0x260,0x202)](_0x16d9d8[_0xbc3c57(-0xc5,0xa9,0x14,0x129)],_0x16d9d8[_0x49177b(0x4a8,0x395,0x6d1,0x419)]))_0x35c14a[_0xbc3c57(0x8f,0x2bd,0x99,0x1c2)]('['+_0x52d7ab+':'+_0x3a3e46+']\x20'+_0x45c5cc,_0x16d9d8[_0xbc3c57(0x3a3,0x2c5,0x415,0x247)](_0x1f37af,''));else return new Response(''+_0x3d4f32,{'status':0xc8,'headers':{'Content-Disposition':_0xbc3c57(0x1f6,0x46,0x3c,-0x116)+';\x20filename'+'='+FileName+(_0x49177b(0x1ec,0x172,0x435,0x36d)+'*=utf-8\x27\x27')+_0x16d9d8['wZHBI'](encodeURIComponent,FileName),'Content-Type':_0xbc3c57(-0x131,-0x1e,0x63,0x68)+_0x49177b(0x5c,0x20e,0x5d,-0x9f)+_0x49177b(0x9f,0x157,0x1f4,-0xe3),'Profile-Update-Interval':'6','Subscription-Userinfo':'upload='+_0x48aed0+(_0xbc3c57(0x29f,-0x99,0x131,0x230)+'=')+_0x1bb8d1+_0xbc3c57(0x373,0x289,0x4b3,0x41b)+_0xabf085+';\x20expire='+expire}});}default:const _0x470ec2={};_0x470ec2[_0x49177b(0x47c,0x29f,0x4e6,0x32d)]=0x194;return new Response(_0x49177b(0x114,0x249,0x36f,0xb5)+_0xbc3c57(0x364,-0x72,0x19a,0x11)+'!',_0x470ec2);}else{proxyIP=_0x4e3185[_0x49177b(0x1c1,0xc9,0x3d8,-0x58)+'ms'][_0xbc3c57(0x11d,0x424,0x396,0x523)](_0x16d9d8[_0xbc3c57(0x6dd,0x427,0x459,0x30b)])||proxyIP;if(new RegExp(_0x16d9d8['EEMeZ'],'i')[_0x49177b(0x1f5,0x3eb,0x381,0x339)](_0x4e3185[_0xbc3c57(-0x54,-0xae,0xf4,0x32c)]))proxyIP=_0x4e3185[_0x49177b(0x118,0x2a6,-0xae,-0xfa)]['toLowerCas'+'e']()['split'](_0x49177b(0x2cf,0x101,0xfb,0x22d))[0x22e1+0x40b+-0x26eb];else{if(new RegExp(_0x49177b(0x2eb,0x25a,0xe3,0x3bf),'i')[_0x49177b(0x1f5,0xf3,0x2cb,0x410)](_0x4e3185['pathname']))proxyIP=_0x49177b(0xf3,0x351,0xd7,0x310)+_0x4e3185[_0x49177b(0x118,0xed,0x26c,0x28c)][_0xbc3c57(0xda,0x301,0x172,0x11)+'e']()[_0xbc3c57(0x1d5,0x33f,0x22d,-0x54)](_0x49177b(0x2eb,0x117,0x555,0x38a))[-0x1e17+0x265f+-0x847];else{if(!proxyIP||_0x16d9d8['bXyeH'](proxyIP,''))proxyIP=_0x16d9d8[_0xbc3c57(0x439,0x141,0x1ec,0x24c)];}}socks5Address=_0x4e3185[_0x49177b(0x1c1,0x218,0x1c9,0x3f8)+'ms'][_0xbc3c57(0x45d,0x4e6,0x396,0x50b)](_0x16d9d8[_0x49177b(0x209,0x2a9,0x86,0x85)])||socks5Address;if(new RegExp(_0x16d9d8[_0xbc3c57(0x1a7,0x5a2,0x3b1,0x611)],'i')[_0xbc3c57(0x2b,0xcd,0x1d1,0x8)](_0x4e3185[_0x49177b(0x118,0x202,0x397,-0x132)]))socks5Address=_0x4e3185[_0x49177b(0x118,-0xa9,-0x13a,0xc5)][_0xbc3c57(0x48a,0x460,0x22d,0x205)]('5=')[-0x1fed+-0x1dc3+0x3db1];else{if(new RegExp(_0x16d9d8[_0x49177b(0x4cf,0x29f,0x750,0x69c)],'i')[_0x49177b(0x1f5,0x38e,-0x75,0xf0)](_0x4e3185['pathname'])||new RegExp(_0x16d9d8[_0xbc3c57(0x41,0x22b,0x1a3,-0x82)],'i')[_0xbc3c57(0x420,0x1b5,0x1d1,0x33a)](_0x4e3185[_0xbc3c57(-0xbd,0x379,0xf4,0x89)])){socks5Address=_0x4e3185['pathname'][_0x49177b(0x251,0x151,0x22f,0x1d0)](_0x16d9d8['LKGvn'])[-0xd*0xe5+-0xce7+0x1889*0x1][_0xbc3c57(0x363,0x21a,0x22d,0x33a)]('#')[0x1366+0x1*0x15ce+-0x2934];if(socks5Address[_0xbc3c57(-0x62,0x38a,0x1b1,0x7)]('@')){let _0x537dca=socks5Address[_0xbc3c57(0xc6,0xab,0x22d,0x2a7)]('@')[-0xddd+0x
		}
	},
};

export async function uuid_validator(request) {
	const hostname = request.headers.get('Host');
	const currentDate = new Date();

	const subdomain = hostname.split('.')[0];
	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const day = String(currentDate.getDate()).padStart(2, '0');

	const formattedDate = `${year}-${month}-${day}`;

	// const daliy_sub = formattedDate + subdomain
	const hashHex = await hashHex_f(subdomain);
	// subdomain string contains timestamps utc and uuid string TODO.
	console.log(hashHex, subdomain, formattedDate);
}

export async function hashHex_f(string) {
	const encoder = new TextEncoder();
	const data = encoder.encode(string);
	const hashBuffer = await crypto.subtle.digest('SHA-256', data);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
	return hashHex;
}

/**
 * Handles วเลส over WebSocket requests by creating a WebSocket pair, accepting the WebSocket connection, and processing the วเลส header.
 * @param {import("@cloudflare/workers-types").Request} request The incoming request object.
 * @returns {Promise<Response>} A Promise that resolves to a WebSocket response object.
 */
async function วเลสOverWSHandler(request) {
	const webSocketPair = new WebSocketPair();
	const [client, webSocket] = Object.values(webSocketPair);
	webSocket.accept();

	let address = '';
	let portWithRandomLog = '';
	let currentDate = new Date();
	const log = (/** @type {string} */ info, /** @type {string | undefined} */ event) => {
		console.log(`[${currentDate} ${address}:${portWithRandomLog}] ${info}`, event || '');
	};
	const earlyDataHeader = request.headers.get('sec-websocket-protocol') || '';

	const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);

	/** @type {{ value: import("@cloudflare/workers-types").Socket | null}}*/
	let remoteSocketWapper = {
		value: null,
	};
	let udpStreamWrite = null;
	let isDns = false;

	// ws --> remote
	readableWebSocketStream.pipeTo(new WritableStream({
		async write(chunk, controller) {
			if (isDns && udpStreamWrite) {
				return udpStreamWrite(chunk);
			}
			if (remoteSocketWapper.value) {
				const writer = remoteSocketWapper.value.writable.getWriter()
				await writer.write(chunk);
				writer.releaseLock();
				return;
			}

			const {
				hasError,
				message,
				portRemote = 443,
				addressRemote = '',
				rawDataIndex,
				วเลสVersion = new Uint8Array([0, 0]),
				isUDP,
			} = processวเลสHeader(chunk, userID);
			address = addressRemote;
			portWithRandomLog = `${portRemote} ${isUDP ? 'udp' : 'tcp'} `;
			if (hasError) {
				// controller.error(message);
				throw new Error(message); // cf seems has bug, controller.error will not end stream
			}

			// If UDP and not DNS port, close it
			if (isUDP && portRemote !== 53) {
				throw new Error('UDP proxy only enabled for DNS which is port 53');
				// cf seems has bug, controller.error will not end stream
			}

			if (isUDP && portRemote === 53) {
				isDns = true;
			}

			// ["version", "附加信息长度 N"]
			const วเลสResponseHeader = new Uint8Array([วเลสVersion[0], 0]);
			const rawClientData = chunk.slice(rawDataIndex);

			// TODO: support udp here when cf runtime has udp support
			if (isDns) {
				const { write } = await handleUDPOutBound(webSocket, วเลสResponseHeader, log);
				udpStreamWrite = write;
				udpStreamWrite(rawClientData);
				return;
			}
			handleTCPOutBound(remoteSocketWapper, addressRemote, portRemote, rawClientData, webSocket, วเลสResponseHeader, log);
		},
		close() {
			log(`readableWebSocketStream is close`);
		},
		abort(reason) {
			log(`readableWebSocketStream is abort`, JSON.stringify(reason));
		},
	})).catch((err) => {
		log('readableWebSocketStream pipeTo error', err);
	});

	return new Response(null, {
		status: 101,
		webSocket: client,
	});
}

/**
 * Handles outbound TCP connections.
 *
 * @param {any} remoteSocket 
 * @param {string} addressRemote The remote address to connect to.
 * @param {number} portRemote The remote port to connect to.
 * @param {Uint8Array} rawClientData The raw client data to write.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket to pass the remote socket to.
 * @param {Uint8Array} วเลสResponseHeader The วเลส response header.
 * @param {function} log The logging function.
 * @returns {Promise<void>} The remote socket.
 */
async function handleTCPOutBound(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, วเลสResponseHeader, log,) {

	/**
	 * Connects to a given address and port and writes data to the socket.
	 * @param {string} address The address to connect to.
	 * @param {number} port The port to connect to.
	 * @returns {Promise<import("@cloudflare/workers-types").Socket>} A Promise that resolves to the connected socket.
	 */
	async function connectAndWrite(address, port) {
		/** @type {import("@cloudflare/workers-types").Socket} */
		const tcpSocket = connect({
			hostname: address,
			port: port,
		});
		remoteSocket.value = tcpSocket;
		log(`connected to ${address}:${port}`);
		const writer = tcpSocket.writable.getWriter();
		await writer.write(rawClientData); // first write, nomal is tls client hello
		writer.releaseLock();
		return tcpSocket;
	}

	/**
	 * Retries connecting to the remote address and port if the Cloudflare socket has no incoming data.
	 * @returns {Promise<void>} A Promise that resolves when the retry is complete.
	 */
	async function retry() {
		const tcpSocket = await connectAndWrite(พร็อกซีไอพี || addressRemote, portRemote)
		tcpSocket.closed.catch(error => {
			console.log('retry tcpSocket closed error', error);
		}).finally(() => {
			safeCloseWebSocket(webSocket);
		})
		remoteSocketToWS(tcpSocket, webSocket, วเลสResponseHeader, null, log);
	}

	const tcpSocket = await connectAndWrite(addressRemote, portRemote);

	// when remoteSocket is ready, pass to websocket
	// remote--> ws
	remoteSocketToWS(tcpSocket, webSocket, วเลสResponseHeader, retry, log);
}

/**
 * Creates a readable stream from a WebSocket server, allowing for data to be read from the WebSocket.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocketServer The WebSocket server to create the readable stream from.
 * @param {string} earlyDataHeader The header containing early data for WebSocket 0-RTT.
 * @param {(info: string)=> void} log The logging function.
 * @returns {ReadableStream} A readable stream that can be used to read data from the WebSocket.
 */
function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
	let readableStreamCancel = false;
	const stream = new ReadableStream({
		start(controller) {
			webSocketServer.addEventListener('message', (event) => {
				const message = event.data;
				controller.enqueue(message);
			});

			webSocketServer.addEventListener('close', () => {
				safeCloseWebSocket(webSocketServer);
				controller.close();
			});

			webSocketServer.addEventListener('error', (err) => {
				log('webSocketServer has error');
				controller.error(err);
			});
			const { earlyData, error } = base64ToArrayBuffer(earlyDataHeader);
			if (error) {
				controller.error(error);
			} else if (earlyData) {
				controller.enqueue(earlyData);
			}
		},

		pull(controller) {
			// if ws can stop read if stream is full, we can implement backpressure
			// https://streams.spec.whatwg.org/#example-rs-push-backpressure
		},

		cancel(reason) {
			log(`ReadableStream was canceled, due to ${reason}`)
			readableStreamCancel = true;
			safeCloseWebSocket(webSocketServer);
		}
	});

	return stream;
}

// https://xtls.github.io/development/protocols/วเลส.html
// https://github.com/zizifn/excalidraw-backup/blob/main/v2ray-protocol.excalidraw

/**
 * Processes the วเลส header buffer and returns an object with the relevant information.
 * @param {ArrayBuffer} วเลสBuffer The วเลส header buffer to process.
 * @param {string} userID The user ID to validate against the UUID in the วเลส header.
 * @returns {{
 *  hasError: boolean,
 *  message?: string,
 *  addressRemote?: string,
 *  addressType?: number,
 *  portRemote?: number,
 *  rawDataIndex?: number,
 *  วเลสVersion?: Uint8Array,
 *  isUDP?: boolean
 * }} An object with the relevant information extracted from the วเลส header buffer.
 */
function processวเลสHeader(วเลสBuffer, userID) {
	if (วเลสBuffer.byteLength < 24) {
		return {
			hasError: true,
			message: 'invalid data',
		};
	}

	const version = new Uint8Array(วเลสBuffer.slice(0, 1));
	let isValidUser = false;
	let isUDP = false;
	const slicedBuffer = new Uint8Array(วเลสBuffer.slice(1, 17));
	const slicedBufferString = stringify(slicedBuffer);
	// check if userID is valid uuid or uuids split by , and contains userID in it otherwise return error message to console
	const uuids = userID.includes(',') ? userID.split(",") : [userID];
	// uuid_validator(hostName, slicedBufferString);


	// isValidUser = uuids.some(userUuid => slicedBufferString === userUuid.trim());
	isValidUser = uuids.some(userUuid => slicedBufferString === userUuid.trim()) || uuids.length === 1 && slicedBufferString === uuids[0].trim();

	console.log(`userID: ${slicedBufferString}`);

	if (!isValidUser) {
		return {
			hasError: true,
			message: 'invalid user',
		};
	}

	const optLength = new Uint8Array(วเลสBuffer.slice(17, 18))[0];
	//skip opt for now

	const command = new Uint8Array(
		วเลสBuffer.slice(18 + optLength, 18 + optLength + 1)
	)[0];

	// 0x01 TCP
	// 0x02 UDP
	// 0x03 MUX
	if (command === 1) {
		isUDP = false;
	} else if (command === 2) {
		isUDP = true;
	} else {
		return {
			hasError: true,
			message: `command ${command} is not support, command 01-tcp,02-udp,03-mux`,
		};
	}
	const portIndex = 18 + optLength + 1;
	const portBuffer = วเลสBuffer.slice(portIndex, portIndex + 2);
	// port is big-Endian in raw data etc 80 == 0x005d
	const portRemote = new DataView(portBuffer).getUint16(0);

	let addressIndex = portIndex + 2;
	const addressBuffer = new Uint8Array(
		วเลสBuffer.slice(addressIndex, addressIndex + 1)
	);

	// 1--> ipv4  addressLength =4
	// 2--> domain name addressLength=addressBuffer[1]
	// 3--> ipv6  addressLength =16
	const addressType = addressBuffer[0];
	let addressLength = 0;
	let addressValueIndex = addressIndex + 1;
	let addressValue = '';
	switch (addressType) {
		case 1:
			addressLength = 4;
			addressValue = new Uint8Array(
				วเลสBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			).join('.');
			break;
		case 2:
			addressLength = new Uint8Array(
				วเลสBuffer.slice(addressValueIndex, addressValueIndex + 1)
			)[0];
			addressValueIndex += 1;
			addressValue = new TextDecoder().decode(
				วเลสBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			);
			break;
		case 3:
			addressLength = 16;
			const dataView = new DataView(
				วเลสBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			);
			// 2001:0db8:85a3:0000:0000:8a2e:0370:7334
			const ipv6 = [];
			for (let i = 0; i < 8; i++) {
				ipv6.push(dataView.getUint16(i * 2).toString(16));
			}
			addressValue = ipv6.join(':');
			// seems no need add [] for ipv6
			break;
		default:
			return {
				hasError: true,
				message: `invild  addressType is ${addressType}`,
			};
	}
	if (!addressValue) {
		return {
			hasError: true,
			message: `addressValue is empty, addressType is ${addressType}`,
		};
	}

	return {
		hasError: false,
		addressRemote: addressValue,
		addressType,
		portRemote,
		rawDataIndex: addressValueIndex + addressLength,
		วเลสVersion: version,
		isUDP,
	};
}


/**
 * Converts a remote socket to a WebSocket connection.
 * @param {import("@cloudflare/workers-types").Socket} remoteSocket The remote socket to convert.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket to connect to.
 * @param {ArrayBuffer | null} วเลสResponseHeader The วเลส response header.
 * @param {(() => Promise<void>) | null} retry The function to retry the connection if it fails.
 * @param {(info: string) => void} log The logging function.
 * @returns {Promise<void>} A Promise that resolves when the conversion is complete.
 */
async function remoteSocketToWS(remoteSocket, webSocket, วเลสResponseHeader, retry, log) {
	// remote--> ws
	let remoteChunkCount = 0;
	let chunks = [];
	/** @type {ArrayBuffer | null} */
	let วเลสHeader = วเลสResponseHeader;
	let hasIncomingData = false; // check if remoteSocket has incoming data
	await remoteSocket.readable
		.pipeTo(
			new WritableStream({
				start() {
				},
				/**
				 * 
				 * @param {Uint8Array} chunk 
				 * @param {*} controller 
				 */
				async write(chunk, controller) {
					hasIncomingData = true;
					remoteChunkCount++;
					if (webSocket.readyState !== WS_READY_STATE_OPEN) {
						controller.error(
							'webSocket.readyState is not open, maybe close'
						);
					}
					if (วเลสHeader) {
						webSocket.send(await new Blob([วเลสHeader, chunk]).arrayBuffer());
						วเลสHeader = null;
					} else {
						// console.log(`remoteSocketToWS send chunk ${chunk.byteLength}`);
						// seems no need rate limit this, CF seems fix this??..
						// if (remoteChunkCount > 20000) {
						// 	// cf one package is 4096 byte(4kb),  4096 * 20000 = 80M
						// 	await delay(1);
						// }
						webSocket.send(chunk);
					}
				},
				close() {
					log(`remoteConnection!.readable is close with hasIncomingData is ${hasIncomingData}`);
					// safeCloseWebSocket(webSocket); // no need server close websocket frist for some case will casue HTTP ERR_CONTENT_LENGTH_MISMATCH issue, client will send close event anyway.
				},
				abort(reason) {
					console.error(`remoteConnection!.readable abort`, reason);
				},
			})
		)
		.catch((error) => {
			console.error(
				`remoteSocketToWS has exception `,
				error.stack || error
			);
			safeCloseWebSocket(webSocket);
		});

	// seems is cf connect socket have error,
	// 1. Socket.closed will have error
	// 2. Socket.readable will be close without any data coming
	if (hasIncomingData === false && retry) {
		log(`retry`)
		retry();
	}
}

/**
 * Decodes a base64 string into an ArrayBuffer.
 * @param {string} base64Str The base64 string to decode.
 * @returns {{earlyData: ArrayBuffer|null, error: Error|null}} An object containing the decoded ArrayBuffer or null if there was an error, and any error that occurred during decoding or null if there was no error.
 */
function base64ToArrayBuffer(base64Str) {
	if (!base64Str) {
		return { earlyData: null, error: null };
	}
	try {
		// go use modified Base64 for URL rfc4648 which js atob not support
		base64Str = base64Str.replace(/-/g, '+').replace(/_/g, '/');
		const decode = atob(base64Str);
		const arryBuffer = Uint8Array.from(decode, (c) => c.charCodeAt(0));
		return { earlyData: arryBuffer.buffer, error: null };
	} catch (error) {
		return { earlyData: null, error };
	}
}

/**
 * Checks if a given string is a valid UUID.
 * Note: This is not a real UUID validation.
 * @param {string} uuid The string to validate as a UUID.
 * @returns {boolean} True if the string is a valid UUID, false otherwise.
 */
function isValidUUID(uuid) {
	const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	return uuidRegex.test(uuid);
}

const WS_READY_STATE_OPEN = 1;
const WS_READY_STATE_CLOSING = 2;
/**
 * Closes a WebSocket connection safely without throwing exceptions.
 * @param {import("@cloudflare/workers-types").WebSocket} socket The WebSocket connection to close.
 */
function safeCloseWebSocket(socket) {
	try {
		if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
			socket.close();
		}
	} catch (error) {
		console.error('safeCloseWebSocket error', error);
	}
}

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
	byteToHex.push((i + 256).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
	return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
	const uuid = unsafeStringify(arr, offset);
	if (!isValidUUID(uuid)) {
		throw TypeError("Stringified UUID is invalid");
	}
	return uuid;
}


/**
 * Handles outbound UDP traffic by transforming the data into DNS queries and sending them over a WebSocket connection.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket connection to send the DNS queries over.
 * @param {ArrayBuffer} วเลสResponseHeader The วเลส response header.
 * @param {(string) => void} log The logging function.
 * @returns {{write: (chunk: Uint8Array) => void}} An object with a write method that accepts a Uint8Array chunk to write to the transform stream.
 */
async function handleUDPOutBound(webSocket, วเลสResponseHeader, log) {

	let isวเลสHeaderSent = false;
	const transformStream = new TransformStream({
		start(controller) {

		},
		transform(chunk, controller) {
			// udp message 2 byte is the the length of udp data
			// TODO: this should have bug, beacsue maybe udp chunk can be in two websocket message
			for (let index = 0; index < chunk.byteLength;) {
				const lengthBuffer = chunk.slice(index, index + 2);
				const udpPakcetLength = new DataView(lengthBuffer).getUint16(0);
				const udpData = new Uint8Array(
					chunk.slice(index + 2, index + 2 + udpPakcetLength)
				);
				index = index + 2 + udpPakcetLength;
				controller.enqueue(udpData);
			}
		},
		flush(controller) {
		}
	});

	// only handle dns udp for now
	transformStream.readable.pipeTo(new WritableStream({
		async write(chunk) {
			const resp = await fetch(dohURL, // dns server url
				{
					method: 'POST',
					headers: {
						'content-type': 'application/dns-message',
					},
					body: chunk,
				})
			const dnsQueryResult = await resp.arrayBuffer();
			const udpSize = dnsQueryResult.byteLength;
			// console.log([...new Uint8Array(dnsQueryResult)].map((x) => x.toString(16)));
			const udpSizeBuffer = new Uint8Array([(udpSize >> 8) & 0xff, udpSize & 0xff]);
			if (webSocket.readyState === WS_READY_STATE_OPEN) {
				log(`doh success and dns message length is ${udpSize}`);
				if (isวเลสHeaderSent) {
					webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
				} else {
					webSocket.send(await new Blob([วเลสResponseHeader, udpSizeBuffer, dnsQueryResult]).arrayBuffer());
					isวเลสHeaderSent = true;
				}
			}
		}
	})).catch((error) => {
		log('dns udp has error' + error)
	});

	const writer = transformStream.writable.getWriter();

	return {
		/**
		 * 
		 * @param {Uint8Array} chunk 
		 */
		write(chunk) {
			writer.write(chunk);
		}
	};
}

const at = 'QA==';
const pt = 'dmxlc3M=';
const ed = 'RUR0dW5uZWw=';
/**
 *
 * @param {string} userID - single or comma separated userIDs
 * @param {string | null} hostName
 * @returns {string}
 */
function getวเลสConfig(userIDs, hostName) {
	const commonUrlPart = `:443?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2048#${hostName}`;
	const hashSeparator = "################################################################";

	// Split the userIDs into an array
	const userIDArray = userIDs.split(",");

	// Prepare output string for each userID
	const output = userIDArray.map((userID) => {
		const วเลสMain = atob(pt) + '://' + userID + atob(at) + hostName + commonUrlPart;
		const วเลสSec = atob(pt) + '://' + userID + atob(at) + พร็อกซีไอพี + commonUrlPart;
		return `<h2>UUID: ${userID}</h2>${hashSeparator}\nv2ray default ip
---------------------------------------------------------------
${วเลสMain}
<button onclick='copyToClipboard("${วเลสMain}")'><i class="fa fa-clipboard"></i> Copy วเลสMain</button>
---------------------------------------------------------------
v2ray with bestip
---------------------------------------------------------------
${วเลสSec}
<button onclick='copyToClipboard("${วเลสSec}")'><i class="fa fa-clipboard"></i> Copy วเลสSec</button>
---------------------------------------------------------------`;
	}).join('\n');
	const sublink = `https://${hostName}/sub/${userIDArray[0]}?format=clash`
	const subbestip = `https://${hostName}/bestip/${userIDArray[0]}`;
	const clash_link = `https://api.v1.mk/sub?target=clash&url=${encodeURIComponent(sublink)}&insert=false&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
	// Prepare header string
	const header = `
<p align='center'><img src='https://cloudflare-ipfs.com/ipfs/bafybeigd6i5aavwpr6wvnwuyayklq3omonggta4x2q7kpmgafj357nkcky' alt='图片描述' style='margin-bottom: -50px;'>
<b style='font-size: 15px;'>Welcome! This function generates configuration for วเลส protocol. If you found this useful, please check our GitHub project for more:</b>
<b style='font-size: 15px;'>欢迎！这是生成 วเลส 协议的配置。如果您发现这个项目很好用，请查看我们的 GitHub 项目给我一个star：</b>
<a href='https://github.com/3Kmfi6HP/EDtunnel' target='_blank'>EDtunnel - https://github.com/3Kmfi6HP/EDtunnel</a>
<iframe src='https://ghbtns.com/github-btn.html?user=USERNAME&repo=REPOSITORY&type=star&count=true&size=large' frameborder='0' scrolling='0' width='170' height='30' title='GitHub'></iframe>
<a href='//${hostName}/sub/${userIDArray[0]}' target='_blank'>วเลส 节点订阅连接</a>
<a href='clash://install-config?url=${encodeURIComponent(`https://${hostName}/sub/${userIDArray[0]}?format=clash`)}}' target='_blank'>Clash for Windows 节点订阅连接</a>
<a href='${clash_link}' target='_blank'>Clash 节点订阅连接</a>
<a href='${subbestip}' target='_blank'>优选IP自动节点订阅</a>
<a href='clash://install-config?url=${encodeURIComponent(subbestip)}' target='_blank'>Clash优选IP自动</a>
<a href='sing-box://import-remote-profile?url=${encodeURIComponent(subbestip)}' target='_blank'>singbox优选IP自动</a>
<a href='sn://subscription?url=${encodeURIComponent(subbestip)}' target='_blank'>nekobox优选IP自动</a>
<a href='v2rayng://install-config?url=${encodeURIComponent(subbestip)}' target='_blank'>v2rayNG优选IP自动</a></p>`;

	// HTML Head with CSS and FontAwesome library
	const htmlHead = `
  <head>
	<title>EDtunnel: วเลส configuration</title>
	<meta name='description' content='This is a tool for generating วเลส protocol configurations. Give us a star on GitHub https://github.com/3Kmfi6HP/EDtunnel if you found it useful!'>
	<meta name='keywords' content='EDtunnel, cloudflare pages, cloudflare worker, severless'>
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<meta property='og:site_name' content='EDtunnel: วเลส configuration' />
	<meta property='og:type' content='website' />
	<meta property='og:title' content='EDtunnel - วเลส configuration and subscribe output' />
	<meta property='og:description' content='Use cloudflare pages and worker severless to implement วเลส protocol' />
	<meta property='og:url' content='https://${hostName}/' />
	<meta property='og:image' content='https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(`วเลส://${userIDs.split(",")[0]}@${hostName}${commonUrlPart}`)}' />
	<meta name='twitter:card' content='summary_large_image' />
	<meta name='twitter:title' content='EDtunnel - วเลส configuration and subscribe output' />
	<meta name='twitter:description' content='Use cloudflare pages and worker severless to implement วเลส protocol' />
	<meta name='twitter:url' content='https://${hostName}/' />
	<meta name='twitter:image' content='https://cloudflare-ipfs.com/ipfs/bafybeigd6i5aavwpr6wvnwuyayklq3omonggta4x2q7kpmgafj357nkcky' />
	<meta property='og:image:width' content='1500' />
	<meta property='og:image:height' content='1500' />

	<style>
	body {
	  font-family: Arial, sans-serif;
	  background-color: #f0f0f0;
	  color: #333;
	  padding: 10px;
	}

	a {
	  color: #1a0dab;
	  text-decoration: none;
	}
	img {
	  max-width: 100%;
	  height: auto;
	}

	pre {
	  white-space: pre-wrap;
	  word-wrap: break-word;
	  background-color: #fff;
	  border: 1px solid #ddd;
	  padding: 15px;
	  margin: 10px 0;
	}
	/* Dark mode */
	@media (prefers-color-scheme: dark) {
	  body {
		background-color: #333;
		color: #f0f0f0;
	  }

	  a {
		color: #9db4ff;
	  }

	  pre {
		background-color: #282a36;
		border-color: #6272a4;
	  }
	}
	</style>

	<!-- Add FontAwesome library -->
	<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
  </head>
  `;

	// Join output with newlines, wrap inside <html> and <body>
	return `
  <html>
  ${htmlHead}
  <body>
  <pre style='background-color: transparent; border: none;'>${header}</pre>
  <pre>${output}</pre>
  </body>
  <script>
	function copyToClipboard(text) {
	  navigator.clipboard.writeText(text)
		.then(() => {
		  alert("Copied to clipboard");
		})
		.catch((err) => {
		  console.error("Failed to copy to clipboard:", err);
		});
	}
  </script>
  </html>`;
}

const เซ็ตพอร์ตHttp = new Set([80, 8080, 8880, 2052, 2086, 2095, 2082]);
const เซ็ตพอร์ตHttps = new Set([443, 8443, 2053, 2096, 2087, 2083]);

function สร้างวเลสSub(ไอดีผู้ใช้_เส้นทาง, ชื่อโฮสต์) {
	const อาร์เรย์ไอดีผู้ใช้ = ไอดีผู้ใช้_เส้นทาง.includes(',') ? ไอดีผู้ใช้_เส้นทาง.split(',') : [ไอดีผู้ใช้_เส้นทาง];
	const ส่วนUrlทั่วไปHttp = `?encryption=none&security=none&fp=random&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2048#`;
	const ส่วนUrlทั่วไปHttps = `?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=random&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2048#`;

	const ผลลัพธ์ = อาร์เรย์ไอดีผู้ใช้.flatMap((ไอดีผู้ใช้) => {
		const การกำหนดค่าHttp = Array.from(เซ็ตพอร์ตHttp).flatMap((พอร์ต) => {
			if (!ชื่อโฮสต์.includes('pages.dev')) {
				const ส่วนUrl = `${ชื่อโฮสต์}-HTTP-${พอร์ต}`;
				const วเลสหลักHttp = atob(pt) + '://' + ไอดีผู้ใช้ + atob(at) + ชื่อโฮสต์ + ':' + พอร์ต + ส่วนUrlทั่วไปHttp + ส่วนUrl;
				return พร็อกซีไอพีs.flatMap((พร็อกซีไอพี) => {
					const วเลสรองHttp = atob(pt) + '://' + ไอดีผู้ใช้ + atob(at) + พร็อกซีไอพี + ':' + พอร์ต + ส่วนUrlทั่วไปHttp + ส่วนUrl + '-' + พร็อกซีไอพี + '-' + atob(ed);
					return [วเลสหลักHttp, วเลสรองHttp];
				});
			}
			return [];
		});

		const การกำหนดค่าHttps = Array.from(เซ็ตพอร์ตHttps).flatMap((พอร์ต) => {
			const ส่วนUrl = `${ชื่อโฮสต์}-HTTPS-${พอร์ต}`;
			const วเลสหลักHttps = atob(pt) + '://' + ไอดีผู้ใช้ + atob(at) + ชื่อโฮสต์ + ':' + พอร์ต + ส่วนUrlทั่วไปHttps + ส่วนUrl;
			return พร็อกซีไอพีs.flatMap((พร็อกซีไอพี) => {
				const วเลสรองHttps = atob(pt) + '://' + ไอดีผู้ใช้ + atob(at) + พร็อกซีไอพี + ':' + พอร์ต + ส่วนUrlทั่วไปHttps + ส่วนUrl + '-' + พร็อกซีไอพี + '-' + atob(ed);
				return [วเลสหลักHttps, วเลสรองHttps];
			});
		});

		return [...การกำหนดค่าHttp, ...การกำหนดค่าHttps];
	});

	return ผลลัพธ์.join('\n');
}

const cn_hostnames = [
	'weibo.com',                // Weibo - A popular social media platform
	'www.baidu.com',            // Baidu - The largest search engine in China
	'www.qq.com',               // QQ - A widely used instant messaging platform
	'www.taobao.com',           // Taobao - An e-commerce website owned by Alibaba Group
	'www.jd.com',               // JD.com - One of the largest online retailers in China
	'www.sina.com.cn',          // Sina - A Chinese online media company
	'www.sohu.com',             // Sohu - A Chinese internet service provider
	'www.tmall.com',            // Tmall - An online retail platform owned by Alibaba Group
	'www.163.com',              // NetEase Mail - One of the major email providers in China
	'www.zhihu.com',            // Zhihu - A popular question-and-answer website
	'www.youku.com',            // Youku - A Chinese video sharing platform
	'www.xinhuanet.com',        // Xinhua News Agency - Official news agency of China
	'www.douban.com',           // Douban - A Chinese social networking service
	'www.meituan.com',          // Meituan - A Chinese group buying website for local services
	'www.toutiao.com',          // Toutiao - A news and information content platform
	'www.ifeng.com',            // iFeng - A popular news website in China
	'www.autohome.com.cn',      // Autohome - A leading Chinese automobile online platform
	'www.360.cn',               // 360 - A Chinese internet security company
	'www.douyin.com',           // Douyin - A Chinese short video platform
	'www.kuaidi100.com',        // Kuaidi100 - A Chinese express delivery tracking service
	'www.wechat.com',           // WeChat - A popular messaging and social media app
	'www.csdn.net',             // CSDN - A Chinese technology community website
	'www.imgo.tv',              // ImgoTV - A Chinese live streaming platform
	'www.aliyun.com',           // Alibaba Cloud - A Chinese cloud computing company
	'www.eyny.com',             // Eyny - A Chinese multimedia resource-sharing website
	'www.mgtv.com',             // MGTV - A Chinese online video platform
	'www.xunlei.com',           // Xunlei - A Chinese download manager and torrent client
	'www.hao123.com',           // Hao123 - A Chinese web directory service
	'www.bilibili.com',         // Bilibili - A Chinese video sharing and streaming platform
	'www.youth.cn',             // Youth.cn - A China Youth Daily news portal
	'www.hupu.com',             // Hupu - A Chinese sports community and forum
	'www.youzu.com',            // Youzu Interactive - A Chinese game developer and publisher
	'www.panda.tv',             // Panda TV - A Chinese live streaming platform
	'www.tudou.com',            // Tudou - A Chinese video-sharing website
	'www.zol.com.cn',           // ZOL - A Chinese electronics and gadgets website
	'www.toutiao.io',           // Toutiao - A news and information app
	'www.tiktok.com',           // TikTok - A Chinese short-form video app
	'www.netease.com',          // NetEase - A Chinese internet technology company
	'www.cnki.net',             // CNKI - China National Knowledge Infrastructure, an information aggregator
	'www.zhibo8.cc',            // Zhibo8 - A website providing live sports streams
	'www.zhangzishi.cc',        // Zhangzishi - Personal website of Zhang Zishi, a public intellectual in China
	'www.xueqiu.com',           // Xueqiu - A Chinese online social platform for investors and traders
	'www.qqgongyi.com',         // QQ Gongyi - Tencent's charitable foundation platform
	'www.ximalaya.com',         // Ximalaya - A Chinese online audio platform
	'www.dianping.com',         // Dianping - A Chinese online platform for finding and reviewing local businesses
	'www.suning.com',           // Suning - A leading Chinese online retailer
	'www.zhaopin.com',          // Zhaopin - A Chinese job recruitment platform
	'www.jianshu.com',          // Jianshu - A Chinese online writing platform
	'www.mafengwo.cn',          // Mafengwo - A Chinese travel information sharing platform
	'www.51cto.com',            // 51CTO - A Chinese IT technical community website
	'www.qidian.com',           // Qidian - A Chinese web novel platform
	'www.ctrip.com',            // Ctrip - A Chinese travel services provider
	'www.pconline.com.cn',      // PConline - A Chinese technology news and review website
	'www.cnzz.com',             // CNZZ - A Chinese web analytics service provider
	'www.telegraph.co.uk',      // The Telegraph - A British newspaper website	
	'www.ynet.com',             // Ynet - A Chinese news portal
	'www.ted.com',              // TED - A platform for ideas worth spreading
	'www.renren.com',           // Renren - A Chinese social networking service
	'www.pptv.com',             // PPTV - A Chinese online video streaming platform
	'www.liepin.com',           // Liepin - A Chinese online recruitment website
	'www.881903.com',           // 881903 - A Hong Kong radio station website
	'www.aipai.com',            // Aipai - A Chinese online video sharing platform
	'www.ttpaihang.com',        // Ttpaihang - A Chinese celebrity popularity ranking website
	'www.quyaoya.com',          // Quyaoya - A Chinese online ticketing platform
	'www.91.com',               // 91.com - A Chinese software download website
	'www.dianyou.cn',           // Dianyou - A Chinese game information website
	'www.tmtpost.com',          // TMTPost - A Chinese technology media platform
	'www.douban.com',           // Douban - A Chinese social networking service
	'www.guancha.cn',           // Guancha - A Chinese news and commentary website
	'www.so.com',               // So.com - A Chinese search engine
	'www.58.com',               // 58.com - A Chinese classified advertising website
	'www.cnblogs.com',          // Cnblogs - A Chinese technology blog community
	'www.cntv.cn',              // CCTV - China Central Television official website
	'www.secoo.com',            // Secoo - A Chinese luxury e-commerce platform
];
