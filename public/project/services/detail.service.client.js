/**
 * Created by moira on 6/9/17.
 */


(function () {
    angular
        .module("WebAppMaker")
        .factory("DetailService", DetailService);

    function DetailService($http) {

        var api = {
            findAllDetailsForWebsite:findAllDetailsForWebsite,
            createDetail:createDetail,
            findDetailById:findDetailById,
            updateDetail:updateDetail,
            deleteDetail:deleteDetail
        };

        return api;


        
        function findDetailById(pid) {
            var url = '/api/detail/'+pid;
            return $http.get(url);
        }


        //function find details by restaurant Id
        function findAllDetailsForWebsite(wid) {
            var url = '/api/restaurant/'+wid+'/detail';
            return $http.get(url);
        }


        //fuction create new detail
        function createDetail(detail) {
            var pg = {
                name:detail.name,
                websiteId:detail.websiteId
            }
            return $http.post('/api/restaurant/'+detail.websiteId+'/detail', pg);
        }



        function deleteDetail(pid) {
            var url ="/api/detail/" + pid;
            $http.delete(url);
        }


        function updateDetail(detail) {
            var url ="/api/detail/"+ detail._id;
            $http.put(url, detail);
        }


    }
})();