// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
const go = {
  "surge": {
    "MiddlewareFunctions": {
      /**
       * DownloadFile
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<boolean>}  - Go Type: bool
       */
      "DownloadFile": (arg1) => {
        return window.go.surge.MiddlewareFunctions.DownloadFile(arg1);
      },
      /**
       * GetFileChunkMap
       * @param {string} arg1 - Go Type: string
       * @param {number} arg2 - Go Type: int
       * @returns {Promise<string>}  - Go Type: string
       */
      "GetFileChunkMap": (arg1, arg2) => {
        return window.go.surge.MiddlewareFunctions.GetFileChunkMap(arg1, arg2);
      },
      /**
       * GetFileDetails
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<FileDetails>}  - Go Type: surge.FileDetails
       */
      "GetFileDetails": (arg1) => {
        return window.go.surge.MiddlewareFunctions.GetFileDetails(arg1);
      },
      /**
       * GetLocalFiles
       * @param {string} arg1 - Go Type: string
       * @param {FileFilterState} arg2 - Go Type: surge.FileFilterState
       * @param {string} arg3 - Go Type: string
       * @param {boolean} arg4 - Go Type: bool
       * @param {number} arg5 - Go Type: int
       * @param {number} arg6 - Go Type: int
       * @returns {Promise<PagedQueryResult>}  - Go Type: surge.PagedQueryResult
       */
      "GetLocalFiles": (arg1, arg2, arg3, arg4, arg5, arg6) => {
        return window.go.surge.MiddlewareFunctions.GetLocalFiles(arg1, arg2, arg3, arg4, arg5, arg6);
      },
      /**
       * GetOfficialTopicName
       * @returns {Promise<string>}  - Go Type: string
       */
      "GetOfficialTopicName": () => {
        return window.go.surge.MiddlewareFunctions.GetOfficialTopicName();
      },
      /**
       * GetPublicKey
       * @returns {Promise<string>}  - Go Type: string
       */
      "GetPublicKey": () => {
        return window.go.surge.MiddlewareFunctions.GetPublicKey();
      },
      /**
       * GetRemoteFiles
       * @param {string} arg1 - Go Type: string
       * @param {string} arg2 - Go Type: string
       * @param {string} arg3 - Go Type: string
       * @param {boolean} arg4 - Go Type: bool
       * @param {number} arg5 - Go Type: int
       * @param {number} arg6 - Go Type: int
       * @returns {Promise<PagedQueryResult>}  - Go Type: surge.PagedQueryResult
       */
      "GetRemoteFiles": (arg1, arg2, arg3, arg4, arg5, arg6) => {
        return window.go.surge.MiddlewareFunctions.GetRemoteFiles(arg1, arg2, arg3, arg4, arg5, arg6);
      },
      /**
       * GetTopicDetails
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<TopicInfo>}  - Go Type: models.TopicInfo
       */
      "GetTopicDetails": (arg1) => {
        return window.go.surge.MiddlewareFunctions.GetTopicDetails(arg1);
      },
      /**
       * GetTopicSubscriptions
       * @returns {Promise<Array.<string>>}  - Go Type: []string
       */
      "GetTopicSubscriptions": () => {
        return window.go.surge.MiddlewareFunctions.GetTopicSubscriptions();
      },
      /**
       * OpenFile
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<void>} 
       */
      "OpenFile": (arg1) => {
        return window.go.surge.MiddlewareFunctions.OpenFile(arg1);
      },
      /**
       * OpenFolder
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<void>} 
       */
      "OpenFolder": (arg1) => {
        return window.go.surge.MiddlewareFunctions.OpenFolder(arg1);
      },
      /**
       * OpenLink
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<void>} 
       */
      "OpenLink": (arg1) => {
        return window.go.surge.MiddlewareFunctions.OpenLink(arg1);
      },
      /**
       * OpenLog
       * @returns {Promise<void>} 
       */
      "OpenLog": () => {
        return window.go.surge.MiddlewareFunctions.OpenLog();
      },
      /**
       * ReadSetting
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<string>}  - Go Type: string
       */
      "ReadSetting": (arg1) => {
        return window.go.surge.MiddlewareFunctions.ReadSetting(arg1);
      },
      /**
       * RemoveFile
       * @param {string} arg1 - Go Type: string
       * @param {boolean} arg2 - Go Type: bool
       * @returns {Promise<boolean>}  - Go Type: bool
       */
      "RemoveFile": (arg1, arg2) => {
        return window.go.surge.MiddlewareFunctions.RemoveFile(arg1, arg2);
      },
      /**
       * SeedFile
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<boolean>}  - Go Type: bool
       */
      "SeedFile": (arg1) => {
        return window.go.surge.MiddlewareFunctions.SeedFile(arg1);
      },
      /**
       * SetDownloadPause
       * @param {string} arg1 - Go Type: string
       * @param {boolean} arg2 - Go Type: bool
       * @returns {Promise<void>} 
       */
      "SetDownloadPause": (arg1, arg2) => {
        return window.go.surge.MiddlewareFunctions.SetDownloadPause(arg1, arg2);
      },
      /**
       * StartDownloadMagnetLinks
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<boolean>}  - Go Type: bool
       */
      "StartDownloadMagnetLinks": (arg1) => {
        return window.go.surge.MiddlewareFunctions.StartDownloadMagnetLinks(arg1);
      },
      /**
       * SubscribeToTopic
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<void>} 
       */
      "SubscribeToTopic": (arg1) => {
        return window.go.surge.MiddlewareFunctions.SubscribeToTopic(arg1);
      },
      /**
       * UnsubscribeFromTopic
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<void>} 
       */
      "UnsubscribeFromTopic": (arg1) => {
        return window.go.surge.MiddlewareFunctions.UnsubscribeFromTopic(arg1);
      },
      /**
       * WriteSetting
       * @param {string} arg1 - Go Type: string
       * @param {string} arg2 - Go Type: string
       * @returns {Promise<boolean>}  - Go Type: bool
       */
      "WriteSetting": (arg1, arg2) => {
        return window.go.surge.MiddlewareFunctions.WriteSetting(arg1, arg2);
      },
    },
  },

};
export default go;
