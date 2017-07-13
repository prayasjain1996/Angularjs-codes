app.factory("myfactory",function($http,$q){
    var object = {
        callserver(city){
            var pr = $q.defer();
            var url ="http://api.apixu.com/v1/forecast.json?key=a5d78dd0e5fb47c4abb194523172706&q="+city+"&days="+5;
            $http.get(url).then(function(data){
                pr.resolve(data.data.forecast.forecastday);
            },function(err){
                pr.reject();
            });                                
            
    return pr.promise;
          } 
    }
    return object;
});