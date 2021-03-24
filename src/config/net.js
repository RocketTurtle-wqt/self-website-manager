// const server = 'http://192.168.3.28:7002';
const server = 'http://172.19.236.203:7002';
const getArticalsByClassifyIdAndPage = `${server}/artical/getArticalsByClassifyIdAndPage`;
const getArticalNumberByClassifyId = `${server}/artical/getArticalNumberByClassifyId`;
const getArticalById = `${server}/artical/getArticalById`;
const publishPicture = `${server}/artical/publishPicture`;
const publishArtical = `${server}/artical/publishArtical`;
const updateArticalById = `${server}/artical/updateArticalById`;
const deleteArticalById = `${server}/artical/deleteArticalById`;
const getClassifies = `${server}/classify/getClassifies`;
const publishClassify = `${server}/classify/publishClassify`;
const deleteClassify = `${server}/classify/deleteClassify`;
const getArticalfrequency = `${server}/frequency/getArticalfrequency`;
const getAlldata = `${server}/echarts/getAlldata`;

export {
  server,
  getArticalsByClassifyIdAndPage,
  getArticalNumberByClassifyId,
  getArticalById,
  publishPicture,
  publishArtical,
  updateArticalById,
  deleteArticalById,
  getClassifies,
  publishClassify,
  deleteClassify,
  getArticalfrequency,
  getAlldata
}