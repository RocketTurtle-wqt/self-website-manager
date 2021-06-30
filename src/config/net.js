const server = 'http://localhost:7002';
// const server2 = 'http://localhost:9002';
// const server = 'http://172.19.236.203:7002';
// const server = 'http://yxa738.natappfree.cc';
// const server = 'http://172.19.175.99:7002';
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
const login = `${server}/login`;

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
  getAlldata,
  login
}