﻿const lujing = process.env.lujing || './temp'; //
const baohuoxiangmu = process.env.URL || '';        // 
const jiangeshijian = process.env.TIME || 120;   //
const weiyishibiema = process.env.weiyishibiema || 'fb14f9e3-feb6-4279-b67a-90faed137967';
const huanxingfuwuqi = process.env.huanxingfuwuqi || 'nz.abc.cn';     // 
const huanxingduankou = process.env.huanxingduankou || '5555';              // 
const huanxingkey = process.env.huanxingkey || '';                    // 
const ergouming = process.env.ergouming || 'zijian3hug.ct8.pp.ua';                // 
const ergourenzhen = process.env.ergourenzhen || 'eyJhIjoiZDQzMzYxM2ZmODQxNWMyMGM3NDY0YTFkN2M2OWE2MDEiLCJ0IjoiOTYyYTQ4NzItMzVjNy00YzZkLTg4YzUtZjMwMWQwMjlmYzI3IiwicyI6Ik0ySmhOall5T1RNdE1qVXdOUzAwTm1ReExUZzJNMlF0TWpNeU56ZzBOR0prTnpZeiJ9';                    // 
const CFIP = process.env.CFIP || 'government.se';                 // 
const CFPORT = process.env.CFPORT || 443;                         //
const NAME = process.env.NAME || 'hug-zijian';                           // 
const ergouduankou = process.env.ergouduankou || 8080;                  // 
const PORT = process.env.SERVER_PORT || process.env.PORT || 7860; // 

const _0x1b4713=_0x4107;(function(_0x49582b,_0x1ddd05){const _0x3ae80b=_0x4107,_0x194fc3=_0x49582b();while(!![]){try{const _0xdee72f=parseInt(_0x3ae80b(0x203))/0x1*(-parseInt(_0x3ae80b(0x20e))/0x2)+parseInt(_0x3ae80b(0x1a8))/0x3*(-parseInt(_0x3ae80b(0x1f3))/0x4)+parseInt(_0x3ae80b(0x1bd))/0x5+-parseInt(_0x3ae80b(0x198))/0x6*(parseInt(_0x3ae80b(0x1a4))/0x7)+-parseInt(_0x3ae80b(0x200))/0x8+-parseInt(_0x3ae80b(0x20b))/0x9+parseInt(_0x3ae80b(0x1cd))/0xa;if(_0xdee72f===_0x1ddd05)break;else _0x194fc3['push'](_0x194fc3['shift']());}catch(_0x356bba){_0x194fc3['push'](_0x194fc3['shift']());}}}(_0x1a0a,0x1e6e1));const express=require(_0x1b4713(0x1f1)),app=express(),axios=require('axios'),os=require('os'),fs=require('fs'),path=require(_0x1b4713(0x1fd)),{promisify}=require(_0x1b4713(0x1ae)),exec=promisify(require(_0x1b4713(0x1ba))[_0x1b4713(0x20c)]),{execSync}=require(_0x1b4713(0x1ba));!fs['existsSync'](lujing)?(fs['mkdirSync'](lujing),console[_0x1b4713(0x1fa)](lujing+_0x1b4713(0x1ce))):console[_0x1b4713(0x1fa)](lujing+_0x1b4713(0x1d1));const pathsToDelete=[_0x1b4713(0x1cf),'bot','npm',_0x1b4713(0x1ac),_0x1b4713(0x190)];function cleanupOldFiles(){const _0x5b42fb=_0x1b4713;pathsToDelete[_0x5b42fb(0x213)](_0x21ee5a=>{const _0x280246=_0x5b42fb,_0x55b819=path[_0x280246(0x1f2)](lujing,_0x21ee5a);fs[_0x280246(0x1f0)](_0x55b819,_0x49b4f5=>{const _0x5b23c2=_0x280246;_0x49b4f5?console['error'](_0x5b23c2(0x20f)+_0x55b819):console[_0x5b23c2(0x1fa)](_0x55b819+_0x5b23c2(0x207));});});}cleanupOldFiles(),app[_0x1b4713(0x196)]('/',function(_0x4ffb29,_0x41c7b5){const _0x2c1488=_0x1b4713;_0x41c7b5['send'](_0x2c1488(0x21d));});const config={'log':{'access':_0x1b4713(0x1c7),'error':_0x1b4713(0x1c7),'loglevel':_0x1b4713(0x1e7)},'inbounds':[{'port':ergouduankou,'protocol':'vless','settings':{'clients':[{'id':weiyishibiema,'flow':_0x1b4713(0x1e6)}],'decryption':_0x1b4713(0x1e7),'fallbacks':[{'dest':0xbb9},{'path':_0x1b4713(0x209),'dest':0xbba},{'path':_0x1b4713(0x21b),'dest':0xbbb},{'path':_0x1b4713(0x199),'dest':0xbbc}]},'streamSettings':{'network':_0x1b4713(0x1cc)}},{'port':0xbb9,'listen':_0x1b4713(0x208),'protocol':_0x1b4713(0x1df),'settings':{'clients':[{'id':weiyishibiema}],'decryption':_0x1b4713(0x1e7)},'streamSettings':{'network':'ws','security':'none'}},{'port':0xbba,'listen':_0x1b4713(0x208),'protocol':'vless','settings':{'clients':[{'id':weiyishibiema,'level':0x0}],'decryption':_0x1b4713(0x1e7)},'streamSettings':{'network':'ws','security':'none','wsSettings':{'path':_0x1b4713(0x209)}},'sniffing':{'enabled':!![],'destOverride':[_0x1b4713(0x1fb),_0x1b4713(0x1d0),_0x1b4713(0x195)],'metadataOnly':![]}},{'port':0xbbb,'listen':_0x1b4713(0x208),'protocol':_0x1b4713(0x1a7),'settings':{'clients':[{'id':weiyishibiema,'alterId':0x0}]},'streamSettings':{'network':'ws','wsSettings':{'path':_0x1b4713(0x21b)}},'sniffing':{'enabled':!![],'destOverride':['http',_0x1b4713(0x1d0),_0x1b4713(0x195)],'metadataOnly':![]}},{'port':0xbbc,'listen':_0x1b4713(0x208),'protocol':_0x1b4713(0x21e),'settings':{'clients':[{'password':weiyishibiema}]},'streamSettings':{'network':'ws','security':'none','wsSettings':{'path':_0x1b4713(0x199)}},'sniffing':{'enabled':!![],'destOverride':[_0x1b4713(0x1fb),'tls',_0x1b4713(0x195)],'metadataOnly':![]}}],'dns':{'servers':[_0x1b4713(0x1d6)]},'outbounds':[{'protocol':_0x1b4713(0x202)},{'tag':_0x1b4713(0x1ca),'protocol':'wireguard','settings':{'secretKey':_0x1b4713(0x1c1),'address':['172.16.0.2/32',_0x1b4713(0x1b1)],'peers':[{'publicKey':_0x1b4713(0x1ef),'allowedIPs':[_0x1b4713(0x1f7),_0x1b4713(0x1a6)],'endpoint':_0x1b4713(0x1c5)}],'reserved':[0x4e,0x87,0x4c],'mtu':0x500}}],'routing':{'domainStrategy':_0x1b4713(0x1ff),'rules':[{'type':'field','domain':[_0x1b4713(0x1cb),_0x1b4713(0x1a0)],'outboundTag':_0x1b4713(0x1ca)}]}};fs[_0x1b4713(0x1d2)](path[_0x1b4713(0x1f2)](lujing,_0x1b4713(0x201)),JSON[_0x1b4713(0x1f4)](config,null,0x2));function getSystemArchitecture(){const _0x3b0fb4=_0x1b4713,_0x280055=os[_0x3b0fb4(0x1e4)]();return _0x280055===_0x3b0fb4(0x1d8)||_0x280055===_0x3b0fb4(0x1c3)||_0x280055==='aarch64'?'arm':'amd';}function downloadFile(_0x517907,_0x4e9d69,_0x421d22){const _0x1d1231=_0x1b4713,_0x20c327=path[_0x1d1231(0x1f2)](lujing,_0x517907),_0x209450=fs[_0x1d1231(0x20a)](_0x20c327);axios({'method':_0x1d1231(0x196),'url':_0x4e9d69,'responseType':_0x1d1231(0x1e0)})[_0x1d1231(0x1dd)](_0x56cd62=>{const _0x39a771=_0x1d1231;_0x56cd62[_0x39a771(0x193)]['pipe'](_0x209450),_0x209450['on']('finish',()=>{const _0x49f712=_0x39a771;_0x209450['close'](),console[_0x49f712(0x1fa)](_0x49f712(0x1d4)+_0x517907+_0x49f712(0x214)),_0x421d22(null,_0x517907);}),_0x209450['on'](_0x39a771(0x1b0),_0x40507b=>{const _0xcfb26e=_0x39a771;fs[_0xcfb26e(0x1f0)](_0x20c327,()=>{});const _0x55e98c=_0xcfb26e(0x1d4)+_0x517907+'\x20failed:\x20'+_0x40507b[_0xcfb26e(0x194)];console['error'](_0x55e98c),_0x421d22(_0x55e98c);});})['catch'](_0x37ed79=>{const _0x1b9b15=_0x1d1231,_0x5ce31f=_0x1b9b15(0x1d4)+_0x517907+_0x1b9b15(0x1b5)+_0x37ed79[_0x1b9b15(0x194)];console[_0x1b9b15(0x1b0)](_0x5ce31f),_0x421d22(_0x5ce31f);});}async function downloadFilesAndRun(){const _0x260f61=_0x1b4713,_0x4277ac=getSystemArchitecture(),_0x3b875e=getFilesForArchitecture(_0x4277ac);if(_0x3b875e['length']===0x0){console[_0x260f61(0x1fa)](_0x260f61(0x1b7));return;}const _0x389e50=_0x3b875e['map'](_0xf5d897=>{return new Promise((_0x4c113d,_0x4d2609)=>{const _0xccb0e4=_0x4107;downloadFile(_0xf5d897[_0xccb0e4(0x21f)],_0xf5d897[_0xccb0e4(0x1be)],(_0x37b9c3,_0x146b40)=>{_0x37b9c3?_0x4d2609(_0x37b9c3):_0x4c113d(_0x146b40);});});});try{await Promise[_0x260f61(0x1e3)](_0x389e50);}catch(_0x3ce320){console[_0x260f61(0x1b0)](_0x260f61(0x215),_0x3ce320);return;}function _0x12c616(_0x515541){const _0x3c9064=_0x260f61,_0x1c130f=0x1fd;_0x515541[_0x3c9064(0x213)](_0x5a5e09=>{const _0x4c1de8=_0x3c9064,_0x40973f=path[_0x4c1de8(0x1f2)](lujing,_0x5a5e09);fs['chmod'](_0x40973f,_0x1c130f,_0x3ec4ec=>{const _0x28633b=_0x4c1de8;_0x3ec4ec?console[_0x28633b(0x1b0)](_0x28633b(0x1e5)+_0x40973f+':\x20'+_0x3ec4ec):console[_0x28633b(0x1fa)](_0x28633b(0x219)+_0x40973f+':\x20'+_0x1c130f[_0x28633b(0x1f6)](0x8));});});}const _0x2d3f86=[_0x260f61(0x1a2),_0x260f61(0x1f8),'./bot'];_0x12c616(_0x2d3f86);let _0x49df17='';if(huanxingfuwuqi&&huanxingduankou&&huanxingkey){const _0x15fe7d=['443',_0x260f61(0x1ea),_0x260f61(0x1b3),_0x260f61(0x211),'2083','2053'];_0x15fe7d[_0x260f61(0x1a9)](huanxingduankou)?_0x49df17=_0x260f61(0x217):_0x49df17='';const _0x511b01='nohup\x20'+lujing+_0x260f61(0x1a1)+huanxingfuwuqi+':'+huanxingduankou+_0x260f61(0x1e2)+huanxingkey+'\x20'+_0x49df17+'\x20>/dev/null\x202>&1\x20&';try{await exec(_0x511b01),console['log'](_0x260f61(0x1a3)),await new Promise(_0x3eb288=>setTimeout(_0x3eb288,0x3e8));}catch(_0xb57c37){console[_0x260f61(0x1b0)](_0x260f61(0x1ec)+_0xb57c37);}}else console['log'](_0x260f61(0x1d9));const _0xb16123=_0x260f61(0x1aa)+lujing+_0x260f61(0x1ad)+lujing+_0x260f61(0x1b4);try{await exec(_0xb16123),console['log'](_0x260f61(0x1db)),await new Promise(_0x492045=>setTimeout(_0x492045,0x3e8));}catch(_0x512ad3){console[_0x260f61(0x1b0)](_0x260f61(0x1c6)+_0x512ad3);}if(fs[_0x260f61(0x18f)](path[_0x260f61(0x1f2)](lujing,'bot'))){let _0x5db304;if(ergourenzhen[_0x260f61(0x1c8)](/^[A-Z0-9a-z=]{120,250}$/))_0x5db304='tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20'+ergourenzhen;else ergourenzhen['match'](/TunnelSecret/)?_0x5db304='tunnel\x20--edge-ip-version\x20auto\x20--config\x20'+lujing+_0x260f61(0x19d):_0x5db304=_0x260f61(0x1e8)+lujing+'/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:'+ergouduankou;try{await exec('nohup\x20'+lujing+'/bot\x20'+_0x5db304+_0x260f61(0x1e9)),console[_0x260f61(0x1fa)](_0x260f61(0x1dc)),await new Promise(_0x4a2eaa=>setTimeout(_0x4a2eaa,0x7d0));}catch(_0x5d015f){console[_0x260f61(0x1b0)](_0x260f61(0x1d7)+_0x5d015f);}}await new Promise(_0xa4457a=>setTimeout(_0xa4457a,0x1388));}function getFilesForArchitecture(_0x3d6a21){const _0x3e0d8b=_0x1b4713;if(_0x3d6a21===_0x3e0d8b(0x1d8))return[{'fileName':_0x3e0d8b(0x1d3),'fileUrl':_0x3e0d8b(0x1c2)},{'fileName':_0x3e0d8b(0x1cf),'fileUrl':_0x3e0d8b(0x206)},{'fileName':_0x3e0d8b(0x197),'fileUrl':_0x3e0d8b(0x1ab)}];else{if(_0x3d6a21===_0x3e0d8b(0x1bc))return[{'fileName':_0x3e0d8b(0x1d3),'fileUrl':_0x3e0d8b(0x1c0)},{'fileName':'web','fileUrl':_0x3e0d8b(0x1af)},{'fileName':_0x3e0d8b(0x197),'fileUrl':_0x3e0d8b(0x1c4)}];}return[];}function argoType(){const _0x2f76e9=_0x1b4713;if(!ergourenzhen||!ergouming){console[_0x2f76e9(0x1fa)]('ergouming\x20or\x20ergourenzhen\x20variable\x20is\x20empty,\x20use\x20quick\x20tunnels');return;}if(ergourenzhen['includes'](_0x2f76e9(0x212))){fs[_0x2f76e9(0x1d2)](path[_0x2f76e9(0x1f2)](lujing,_0x2f76e9(0x216)),ergourenzhen);const _0x2ffcb9=_0x2f76e9(0x1b2)+ergourenzhen[_0x2f76e9(0x21a)]('\x22')[0xb]+'\x0a\x20\x20credentials-file:\x20'+path[_0x2f76e9(0x1f2)](lujing,_0x2f76e9(0x216))+_0x2f76e9(0x1ee)+ergouming+_0x2f76e9(0x1eb)+ergouduankou+'\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20';fs[_0x2f76e9(0x1d2)](path[_0x2f76e9(0x1f2)](lujing,'tunnel.yml'),_0x2ffcb9);}else console[_0x2f76e9(0x1fa)]('ergourenzhen\x20mismatch\x20TunnelSecret,use\x20token\x20connect\x20to\x20tunnel');}argoType();async function extractDomains(){const _0x2d0c0b=_0x1b4713;let _0x5a01d2;if(ergourenzhen&&ergouming)_0x5a01d2=ergouming,console[_0x2d0c0b(0x1fa)](_0x2d0c0b(0x1d5),_0x5a01d2),await _0x3db339(_0x5a01d2);else try{const _0x3e7ee4=fs['readFileSync'](path[_0x2d0c0b(0x1f2)](lujing,_0x2d0c0b(0x190)),'utf-8'),_0x3ddbc1=_0x3e7ee4[_0x2d0c0b(0x21a)]('\x0a'),_0x3aaaec=[];_0x3ddbc1[_0x2d0c0b(0x213)](_0x2aa96d=>{const _0x43d768=_0x2d0c0b,_0x4ee5ef=_0x2aa96d[_0x43d768(0x1c8)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);if(_0x4ee5ef){const _0x11a5d5=_0x4ee5ef[0x1];_0x3aaaec[_0x43d768(0x191)](_0x11a5d5);}});if(_0x3aaaec[_0x2d0c0b(0x1b6)]>0x0)_0x5a01d2=_0x3aaaec[0x0],console['log'](_0x2d0c0b(0x1de),_0x5a01d2),await _0x3db339(_0x5a01d2);else{console[_0x2d0c0b(0x1fa)]('ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain'),fs[_0x2d0c0b(0x19a)](path[_0x2d0c0b(0x1f2)](lujing,_0x2d0c0b(0x190))),await new Promise(_0x48bc05=>setTimeout(_0x48bc05,0x7d0));const _0x42651c=_0x2d0c0b(0x1e8)+lujing+_0x2d0c0b(0x1a5)+ergouduankou;try{await exec('nohup\x20'+path[_0x2d0c0b(0x1f2)](lujing,_0x2d0c0b(0x197))+'\x20'+_0x42651c+'\x20>/dev/null\x202>&1\x20&'),console[_0x2d0c0b(0x1fa)](_0x2d0c0b(0x1f9)),await new Promise(_0x3d748d=>setTimeout(_0x3d748d,0xbb8)),await extractDomains();}catch(_0x29b197){console[_0x2d0c0b(0x1b0)](_0x2d0c0b(0x1d7)+_0x29b197);}}}catch(_0x1c8e60){console[_0x2d0c0b(0x1b0)]('Error\x20reading\x20boot.log:',_0x1c8e60);}async function _0x3db339(_0x5f21cd){const _0x344696=_0x2d0c0b,_0x14f215=execSync(_0x344696(0x1fe),{'encoding':_0x344696(0x1bf)}),_0x11ede8=_0x14f215[_0x344696(0x18c)]();return new Promise(_0x41b261=>{setTimeout(()=>{const _0x336581=_0x4107,_0x2b51d4={'v':'2','ps':NAME+'-'+_0x11ede8,'add':CFIP,'port':CFPORT,'id':weiyishibiema,'aid':'0','scy':'none','net':'ws','type':_0x336581(0x1e7),'host':_0x5f21cd,'path':_0x336581(0x1e1),'tls':_0x336581(0x1d0),'sni':_0x5f21cd,'alpn':''},_0x4d4498=_0x336581(0x204)+weiyishibiema+'@'+CFIP+':'+CFPORT+_0x336581(0x1c9)+_0x5f21cd+_0x336581(0x20d)+_0x5f21cd+_0x336581(0x1fc)+NAME+'-'+_0x11ede8+_0x336581(0x19c)+Buffer[_0x336581(0x218)](JSON[_0x336581(0x1f4)](_0x2b51d4))[_0x336581(0x1f6)](_0x336581(0x205))+'\x0a\x20\x20\x0atrojan://'+weiyishibiema+'@'+CFIP+':'+CFPORT+_0x336581(0x1ed)+_0x5f21cd+_0x336581(0x20d)+_0x5f21cd+_0x336581(0x21c)+NAME+'-'+_0x11ede8+_0x336581(0x210);console[_0x336581(0x1fa)](Buffer[_0x336581(0x218)](_0x4d4498)['toString'](_0x336581(0x205)));const _0x3b0229=path[_0x336581(0x1f2)](lujing,_0x336581(0x1ac));fs[_0x336581(0x1d2)](_0x3b0229,Buffer[_0x336581(0x218)](_0x4d4498)[_0x336581(0x1f6)](_0x336581(0x205))),console['log'](lujing+_0x336581(0x1b9)),app[_0x336581(0x196)](_0x336581(0x1da),(_0x491e6a,_0x58cfe1)=>{const _0x138593=_0x336581,_0x3e52eb=Buffer[_0x138593(0x218)](_0x4d4498)[_0x138593(0x1f6)](_0x138593(0x205));_0x58cfe1[_0x138593(0x1b8)](_0x138593(0x1bb),'text/plain;\x20charset=utf-8'),_0x58cfe1[_0x138593(0x192)](_0x3e52eb);}),_0x41b261(_0x4d4498);},0x7d0);});}}function _0x4107(_0x647a0d,_0x3f3085){const _0x1a0ae2=_0x1a0a();return _0x4107=function(_0x410714,_0x338aa6){_0x410714=_0x410714-0x18c;let _0x7aed69=_0x1a0ae2[_0x410714];return _0x7aed69;},_0x4107(_0x647a0d,_0x3f3085);}const npmPath=path[_0x1b4713(0x1f2)](lujing,_0x1b4713(0x1d3)),webPath=path['join'](lujing,_0x1b4713(0x1cf)),botPath=path[_0x1b4713(0x1f2)](lujing,_0x1b4713(0x197)),bootLogPath=path[_0x1b4713(0x1f2)](lujing,'boot.log'),configPath=path[_0x1b4713(0x1f2)](lujing,'config.json');function cleanFiles(){setTimeout(()=>{const _0x1ec285=_0x4107;exec(_0x1ec285(0x18e)+bootLogPath+'\x20'+configPath+'\x20'+npmPath+'\x20'+webPath+'\x20'+botPath,(_0x3747ec,_0x7e848a,_0x58ad45)=>{const _0x57b7b2=_0x1ec285;if(_0x3747ec){console[_0x57b7b2(0x1b0)](_0x57b7b2(0x19e)+_0x3747ec);return;}console[_0x57b7b2(0x1f5)](),console[_0x57b7b2(0x1fa)]('App\x20is\x20running'),console[_0x57b7b2(0x1fa)](_0x57b7b2(0x19b));});},0xea60);}cleanFiles();function _0x1a0a(){const _0xedb496=['vmess','51159LdPTet','includes','nohup\x20','https://github.com/eooce/test/releases/download/arm64/bot13','sub.txt','/web\x20-c\x20','util','https://github.com/eooce/test/raw/main/web','error','2606:4700:110:8a36:df92:102a:9602:fa18/128','\x0a\x20\x20tunnel:\x20','2096','/config.json\x20>/dev/null\x202>&1\x20&','\x20failed:\x20','length','Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture','set','/sub.txt\x20saved\x20successfully','child_process','Content-Type','amd','499440KVpOFt','fileUrl','utf-8','https://github.com/eooce/test/raw/main/amd64','YFYOAdbw1bKTHlNNi+aEjBM3BO7unuFC5rOkMRAz9XY=','https://github.com/eooce/test/releases/download/ARM/swith','arm64','https://github.com/eooce/test/raw/main/server','162.159.193.10:2408','web\x20running\x20error:\x20','/dev/null','match','?encryption=none&security=tls&sni=','WARP','domain:openai.com','tcp','8895280Qrvdbj','\x20is\x20created','web','tls','\x20already\x20exists','writeFileSync','npm','Download\x20','ergouming:','https+local://8.8.8.8/dns-query','Error\x20executing\x20command:\x20','arm','NEZHA\x20variable\x20is\x20empty,skip\x20running','/sub','web\x20is\x20running','bot\x20is\x20running','then','ArgoDomain:','vless','stream','/vmess?ed=2048','\x20-p\x20','all','arch','Empowerment\x20failed\x20for\x20','xtls-rprx-vision','none','tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20','\x20>/dev/null\x202>&1\x20&','8443','\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:','npm\x20running\x20error:\x20','?security=tls&sni=','\x0a\x20\x20protocol:\x20http2\x0a\x20\x20\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20','bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=','unlink','express','join','24GZPYEb','stringify','clear','toString','0.0.0.0/0','./web','bot\x20is\x20running.','log','http','&path=%2Fvless%3Fed%3D2048#','path','curl\x20-s\x20https://speed.cloudflare.com/meta\x20|\x20awk\x20-F\x5c\x22\x20\x27{print\x20$26\x22-\x22$18}\x27\x20|\x20sed\x20-e\x20\x27s/\x20/_/g\x27','AsIs','1537288LYBhsl','config.json','freedom','2ugmrET','\x0avless://','base64','https://github.com/eooce/test/releases/download/ARM/web','\x20deleted','127.0.0.1','/vless','createWriteStream','2180205GUEyNt','exec','&type=ws&host=','202438PDyyNZ','Skip\x20Delete\x20','\x0a\x20\x20\x20\x20','2087','TunnelSecret','forEach','\x20successfully','Error\x20downloading\x20files:','tunnel.json','--tls','from','Empowerment\x20success\x20for\x20','split','/vmess','&path=%2Ftrojan%3Fed%3D2048#','Hello\x20world!','trojan','fileName','trim','Page\x20visited\x20successfully','rm\x20-rf\x20','existsSync','boot.log','push','send','data','message','quic','get','bot','102DSYoVF','/trojan','unlinkSync','Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!','\x0a\x20\x20\x0avmess://','/tunnel.yml\x20run','Error\x20while\x20deleting\x20files:\x20','URL\x20or\x20TIME\x20variable\x20is\x20empty,skip\x20visit\x20url','domain:ai.com','/npm\x20-s\x20','./npm','npm\x20is\x20running','51723uKlwDW','/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:','::/0'];_0x1a0a=function(){return _0xedb496;};return _0x1a0a();}let hasLoggedEmptyMessage=![];async function visitProjectPage(){const _0x2b7de3=_0x1b4713;try{if(!baohuoxiangmu||!jiangeshijian){!hasLoggedEmptyMessage&&(console['log'](_0x2b7de3(0x19f)),hasLoggedEmptyMessage=!![]);return;}else hasLoggedEmptyMessage=![];await axios[_0x2b7de3(0x196)](baohuoxiangmu),console[_0x2b7de3(0x1fa)](_0x2b7de3(0x18d)),console[_0x2b7de3(0x1f5)]();}catch(_0x49c845){console[_0x2b7de3(0x1b0)]('Error\x20visiting\x20project\x20page:',_0x49c845[_0x2b7de3(0x194)]);}}setInterval(visitProjectPage,jiangeshijian*0x3e8);async function startserver(){await downloadFilesAndRun(),await extractDomains(),visitProjectPage();}startserver(),app['listen'](PORT,()=>console[_0x1b4713(0x1fa)]('Http\x20server\x20is\x20running\x20on\x20port:'+PORT+'!'));
