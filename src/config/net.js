// const server = 'http://192.168.3.28:7002';
const server = 'http://10.8.157.62:7002';
const getArticalsByClassifyId = `${server}/artical/getArticalsByClassifyId`;
const getArticalById = `${server}/artical/getArticalById`;
const publishPicture = `${server}/artical/publishPicture`;
const publishArtical = `${server}/artical/publishArtical`;
const updateArticalById = `${server}/artical/updateArticalById`;
const deleteArticalById = `${server}/artical/deleteArticalById`;
const getClassifies = `${server}/classify/getClassifies`;
const getArticalfrequency = `${server}/frequency/getArticalfrequency`;
const publishClassify = `${server}/classify/publishClassify`;

export {
  server,
  getArticalsByClassifyId,
  getArticalById,
  publishPicture,
  publishArtical,
  updateArticalById,
  deleteArticalById,
  getClassifies,
  getArticalfrequency,
  publishClassify
}