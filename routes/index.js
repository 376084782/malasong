var express = require('express');
var router = express.Router();


var request = require('request');


/* GET home page. */

router.post('/scan', async (req, res, next) => {
  let data = req.body;
  request.post({
    url: 'http://jisumpsb.market.alicloudapi.com/businesscardrecognition/recognize',
    headers: {
      Authorization: "APPCODE " + '82a9901359d24e01ac548b44c21fd41b',
    },
    form: {
      pic: data.pic
    }
  }, function (error, response, body) {
    // console.log(response, body, 'data')
    if (!error && response.statusCode == 200) {
      console.log(body, '请求成功的处理逻辑') // 请求成功的处理逻辑
      res.json({
        code: 0,
        data: body
      });
    } else {
      console.log(error, response, body,'error')
      res.json({
        code: -1,
      });
    }
  }, (e) => {
    console.log(e, 'complete')

    res.json({
      code: -1,
    });
  });
});

// router.post('/doSubmit', async (req, res, next) => {
//   let data = req.body;
//   let dataDB = await ModelUser1.findOne({
//     number: '' + data.number,
//   })
//   if (dataDB) {
//     res.json({
//       code: -1,
//       message: '您已定制过赛服，请勿重复提交。'
//     });
//   } else {
//     let count = await ModelUser1.find({}).countDocuments()
//     let order = count + 1;
//     await ModelUser1.insertMany([{
//       name: data.name,
//       sex: data.sex,
//       birth: data.birth,
//       number: data.number,
//       content: data.content,
//       order: order,
//       phone: data.phone
//     }], {
//       writeConcern: 0,
//     })
//     res.json({
//       code: 0,
//       data: {
//         name: data.name,
//         sex: data.sex,
//         birth: data.birth,
//         number: data.number,
//         content: data.content,
//         order: order,
//         phone: data.phone
//       },
//       message: '提交成功'
//     });
//   }
// });
// router.post('/getData', async (req, res, next) => {
//   let data = req.body;
//   let dataDB = await ModelUser1.findOne({
//     phone: data.phone,
//     name: data.name
//   })
//   if (dataDB) {
//     res.json({
//       code: 0,
//       data: dataDB,
//       message: ''
//     });
//   } else {
//     res.json({
//       code: 99,
//       data: {},
//       message: '未提交过'
//     });
//   }
// });

// router.post('/login', async (req, res, next) => {
//   let data = req.body;
//   let dataDB = await ModelUser1.findOne({
//     nickName: '' + data.nickName,
//     cardId: '' + data.cardId
//   })
//   if (dataDB) {
//     res.json({
//       code: 0,
//       data: {
//         nickName: data.nickName,
//         cardId: data.cardId
//       }
//     });
//   } else {
//     res.json({
//       code: 9999,
//       message: '您信息填写有误或未报名此次活动1'
//     });
//   }
// });
// // router.post('/scan', async (req, res, next) => {
// //   let data = req.body;
// //   let timeNow = new Date().getTime();
// //   if (timeNow - data.time > 60 * 1000 * 5) {
// //     res.json({
// //       code: -1,
// //       message: '验证码已过期，请刷新重试'
// //     });
// //     return
// //   }
// //   let dataDB = await ModelUser1.findOne({
// //     cardId: '' + data.cardId
// //   })
// //   if (dataDB) {
// //     let listGamePlayed = dataDB.listGamePlayed.split(',');
// //     if (listGamePlayed.indexOf(data.gameId) > -1) {
// //       res.json({
// //         code: -1,
// //         message: '您已经打过卡了'
// //       });
// //     } else {
// //       listGamePlayed.push(data.gameId);
// //       await dataDB.updateOne({
// //         listGamePlayed: listGamePlayed.join(',')
// //       })
// //       res.json({
// //         code: 0,
// //         data: {

// //         }
// //       });
// //     }
// //   } else {
// //     res.json({
// //       code: 9999,
// //       message: '您信息填写有误或未报名此次活动2'
// //     });
// //   }
// // });
// router.post('/played', async (req, res, next) => {
//   let data = req.body;
//   let dataDB = await ModelUser1.findOne({
//     cardId: '' + data.cardId
//   })
//   if (dataDB) {
//     res.json({
//       code: 0,
//       data: dataDB
//     });
//   } else {
//     res.json({
//       code: 9999,
//       message: '您信息填写有误或未报名此次活动3'
//     });
//   }
// });
// router.post('/check', async (req, res, next) => {
//   let data = req.body;
//   let dataDB = await ModelUser1.findOne({
//     cardId: '' + data.cardId
//   })
//   if (dataDB) {
//     if (dataDB.flagGiftGot) {
//       res.json({
//         code: -1,
//         message: data.cardId + '已经领取过奖励'
//       });
//     } else {

//       let listGamePlayed = dataDB.listGamePlayed.split(',').filter(item => !!item);
//       if (listGamePlayed.length >= 3) {
//         await dataDB.updateOne({
//           flagGiftGot: true
//         })
//         res.json({
//           code: 0,
//           message: data.cardId + '验证成功'
//         });
//       } else {
//         res.json({
//           code: -1,
//           message: '未完成三个游戏'
//         });
//       }
//     }
//   } else {
//     res.json({
//       code: 9999,
//       message: '您信息填写有误或未报名此次活动4'
//     });
//   }
// });
export default router;