/*.factory('authInterceptor', [
    "$q", "$window", "$location", "session", */
const token = 'Bearer BQA2yoA7t-J8Zd2syj-tTfuu48p-Qmptcbiwl5BEyKMr_MUEy0M-iI6XuKWQYtvLjVYuduqDCcg-3Rvp_T-YzSIBILfTriqDccosbsNvuEIDylACiIAaKDaAYazu1Cf-fHAW4XouZQ';

module.exports = function($q) {
  'ngInject';
  return {
    request: function(config) {
      config.headers = config.headers || {};
      config.headers.Authorization = token;
      return config;
    },
    response: function(response) {
      return response || $q.when(response);
    },
    responseError: function(rejection) {
      debugger;
    }
  };
};