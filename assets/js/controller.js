var app = angular.module('watchElectricity', ['ngRoute', 'ui.bootstrap']);

// configure our routes
app.config(function($locationProvider, $routeProvider) {
    $routeProvider
        // route for the index page
        .when('/', {
            templateUrl : '/templates/home.html',
            controller  : 'home_controller'
        })

        // route for the about page
        .when('/technologies', {
            templateUrl : '/templates/used_technologies.html',
            controller  : 'technologies_controller'
        })

        .when('/market/line-chart/:date', {
            templateUrl : '/templates/marketLineChart.html',
            controller  : 'market-line-chart'
        })

        .when('/market/radar-chart/:date', {
            templateUrl : '/templates/marketRadarChart.html',
            controller  : 'market-radar-chart'
        })

        .when('/devices/line-chart/:date/:type/:nodeID/:houseID', {
            templateUrl : '/templates/devicesLineChart.html',
            controller  : 'devices-line-chart'
        })

        .when('/devices/radar-chart/:date/:type/:nodeID/:houseID', {
            templateUrl : '/templates/devicesRadarChart.html',
            controller  : 'devices-radar-chart'
        })

        .when('/energy-sources/line-chart/:date/:type/:nodeID', {
            templateUrl : '/templates/energySourcesLineChart.html',
            controller  : 'energy-sources-line-chart'
        })

        .when('/energy-sources/radar-chart/:date/:type/:nodeID', {
            templateUrl : '/templates/energySourcesRadarChart.html',
            controller  : 'energy-sources-radar-chart'
        })

        .when('/triplex-meter/line-chart/:date/:nodeID', {
            templateUrl : '/templates/triplexMeterLineChart.html',
            controller  : 'triplex-meter-line-chart'
        })

        .when('/houses/line-chart/:date/:nodeID/:houseID', {
            templateUrl : '/templates/houseLineChart.html',
            controller  : 'house-line-chart'
        })

        .when('/houses/multiple-line-chart/:date/:nodeID/:houseID/:phase', {
            templateUrl : '/templates/housesMultipleLineChart.html',
            controller  : 'houses-multiple-charts'
        })

        .when('/houses/spider-chart/:date/:nodeID/:houseID/:phase', {
            templateUrl : '/templates/housesSpiderChart.html',
            controller  : 'houses-spider-chart'
        })

        .when('/transformer/line-chart/:date', {
            templateUrl : '/templates/transformerLineChart.html',
            controller  : 'transformer-line-chart'
        })

        .when('/devices/multiple-line-chart/:date/:type/:nodeID/:houseID', {
            templateUrl : '/templates/devicesMultipleCharts.html',
            controller  : 'devices-multiple-charts'
        })

        .when('/devices/multiple-axes/:date/:type/:nodeID/:houseID', {
          templateUrl : '/templates/devicesMultipleAxes.html',
          controller  : 'devices-multiple-axes-chart'
        })

        .when('/devices/heatmap-load/:type/:nodeID/:houseID', {
            templateUrl : '/templates/devicesHeatmapLoad.html',
            controller  : 'devices-heatmap-load'
        })

        .when('/devices/heatmap-price/:type/:nodeID/:houseID', {
            templateUrl : '/templates/devicesHeatmapPrice.html',
            controller  : 'devices-heatmap-price'
        })

        .when('/devices/heatmap-quantity/:type/:nodeID/:houseID', {
            templateUrl : '/templates/devicesHeatmapQuantity.html',
            controller  : 'devices-heatmap-quantity'
        })

        .when('/market/highcharts-line/:date', {
          templateUrl : '/templates/marketHighcharts.html',
          controller  : 'market-line-highcharts'
        })

        .when('/market/highcharts-spider/:date', {
          templateUrl : '/templates/marketHighchartsSpider.html',
          controller  : 'market-spider-highcharts'
        })

        .when('/energy-sources/multiple-axes/:date/:type/:nodeID', {
            templateUrl : '/templates/energySourcesMultipleAxesChart.html',
            controller  : 'energy-sources-multiple-axes-chart'
        })

        .when('/triplex-meter/multiple-axes/:date/:nodeID', {
            templateUrl : '/templates/triplexMeterMultipleAxesChart.html',
            controller  : 'triplex-meter-multiple-axes-chart'
        })

        .when('/triplex-meter/highcharts/:date/:nodeID', {
            templateUrl : '/templates/triplexMeterHighcharts.html',
            controller  : 'triplex-meter-highcharts'
        })

        .when('/triplex-meter/highcharts-spider/:date/:nodeID', {
            templateUrl : '/templates/triplexMeterSpiderHighcharts.html',
            controller  : 'triplex-meter-spider-highcharts'
        })

        .when('/triplex-meter/test', {
            templateUrl : '/templates/test.html',
            controller  : 'triplex-meter-multiple-axes-chart'
        })

        .when('/triplex-meter-select', {
            templateUrl : '/templates/triplexMeterSelect.html',
            controller  : 'date-picker-controller'
        })

        .when('/devices-select', {
            templateUrl : '/templates/devicesSelect.html',
            controller  : 'date-picker-controller'
        })

        .when('/energy-sources-select', {
            templateUrl : '/templates/energySourcesSelect.html',
            controller  : 'date-picker-controller'
        })

         .when('/houses-select', {
            templateUrl : '/templates/housesSelect.html',
            controller  : 'date-picker-controller'
        })

        .when('/market-pool-select', {
            templateUrl : '/templates/marketPoolSelect.html',
            controller  : 'date-picker-controller'
        })

        .when('/nodes-select', {
            templateUrl : '/templates/nodesSelect.html',
            controller  : 'date-picker-controller'
        })

        .when('/transformer-select', {
            templateUrl : '/templates/transformerSelect.html',
            controller  : 'date-picker-controller'
        })

        .when('/energy-sources/line/:date/:type/:nodeID', {
            templateUrl : '/templates/energySourcesLineChartHighcharts.html',
            controller  : 'energy-sources-line-chart-highcharts'
        })

        .when('/energy-sources/spider/:date/:type/:nodeID', {
            templateUrl : '/templates/energySourcesSpiderChartHighcharts.html',
            controller  : 'energy-sources-spider-chart-highcharts'
        })

        .when('/transformer/line/:date', {
            templateUrl : '/templates/transformerLineChartHighcharts.html',
            controller  : 'transformer-line-chart-highcharts'
        })

        .when('/transformer/spider/:date', {
            templateUrl : '/templates/transformerSpiderChartHighcharts.html',
            controller  : 'transformer-spider-chart-highcharts'
        })

        .when('/transformer/graph/:date/:time', {
            templateUrl : '/templates/transformerGraph.html',
            controller  : 'transformer-graphical-representation'
        })

        .when('/nodes/graph', {
            templateUrl : '/templates/nodesGraph.html',
            controller  : 'nodes-graph'
        });

         // $locationProvider.html5Mode({
        //   enabled: true,
        //   requireBase: false
        // });
});

app.controller('market-line-chart', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;

  $http ({
    url : '/market/' + date,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = marketChart(data);
    var lineCtx = document.getElementById('market-line-chart').getContext('2d');
    var myLineChart = new Chart(lineCtx).Line(chartData,  {
                                                            responsive : true,
                                                            pointHitDetectionRadius : 5
                                                          });

    $scope.rows = data;

    $scope.date = date;
  });
});


app.controller('market-radar-chart', function($scope, $http, $route, $routeParams) {

  var date = $routeParams.date;
  $http ({
    url : '/market/' + date,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = marketChart(data);
    var radarCtx = document.getElementById('market-radar-chart').getContext('2d');
    var myRadarChart = new Chart(radarCtx).Radar(chartData, {
                                                              responsive : true,
                                                              pointHitDetectionRadius : 15
                                                            });

    $scope.rows = data;
    $scope.date = date;
  });
});

app.controller('devices-line-chart', function($scope, $http, $route, $routeParams) {

  var date = $routeParams.date;
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;

  $http ({
    url : '/devices/' + date + '/' + type + '/' + nodeID + '/' + houseID,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = devicesChart(data);
    var devLineCtx = document.getElementById('devices-line-chart').getContext('2d');
    var devLineChart = new Chart(devLineCtx).Line(chartData,  {
                                                            responsive : true,
                                                            pointHitDetectionRadius : 5
                                                          });
    var newType;

    if(type=='wh') {
      newType = 'Waterheater';
    }

    if(type=='ac') {
      newType = 'Air Condition';
    }

    $scope.rows = data;
    $scope.date = date;
    $scope.type = type;
    $scope.newType = newType;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
  });
});

app.controller('devices-radar-chart', function($scope, $http, $route, $routeParams) {

  var date = $routeParams.date;
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;

  $http ({
    url : '/devices/' + date + '/' + type + '/' + nodeID + '/' + houseID,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = devicesChart(data);
    var devRadarCtx = document.getElementById('devices-radar-chart').getContext('2d');
    var devRadarChart = new Chart(devRadarCtx).Radar(chartData,  {
                                                            responsive : true,
                                                            pointHitDetectionRadius : 15
                                                          });
    var newType;

    if(type=='wh') {
      newType = 'Waterheater';
    }

    if(type=='ac') {
      newType = 'Air Condition';
    }

    $scope.rows = data;
    $scope.date = date;
    $scope.type = type;
    $scope.newType = newType;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
  });
});

app.controller('energy-sources-line-chart', function($scope, $http, $route, $routeParams) {

  var date = $routeParams.date;
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;

  $http ({
    url : '/energy-sources/' + date + '/' + type + '/' + nodeID,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = energySourcesChart(data);
    var energyLineCtx = document.getElementById('energy-sources-line-chart').getContext('2d');
    var energyLineChart = new Chart(energyLineCtx).Line(chartData,  {
                                                            responsive : true,
                                                            pointHitDetectionRadius : 5
                                                          });
    $scope.rows = data;
    $scope.date = date;
    $scope.type = type;
    $scope.nodeID = nodeID;
  });
});

app.controller('energy-sources-radar-chart', function($scope, $http, $route, $routeParams) {

  var date = $routeParams.date;
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;

  $http ({
    url : '/energy-sources/' + date + '/' + type + '/' + nodeID,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = energySourcesChart(data);
    var energyRadarCtx = document.getElementById('energy-sources-radar-chart').getContext('2d');
    var energyRadarChart = new Chart(energyRadarCtx).Radar(chartData,  {
                                                            responsive : true,
                                                            pointHitDetectionRadius : 15
                                                          });
    $scope.rows = data;
    $scope.date = date;
    $scope.type = type;
    $scope.nodeID = nodeID;
  });
});

app.controller('triplex-meter-line-chart', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;

  $http ({
    url : '/triplex-meter/' + date + '/' + nodeID,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = triplexMeterChart(data);
    var triplexLineCtx = document.getElementById('triplex-meter-line-chart').getContext('2d');
    var triplexLineChart = new Chart(triplexLineCtx).Line(chartData,  {
                                                            responsive : true,
                                                            pointHitDetectionRadius : 5
                                                          });

    $scope.rows = data;
    $scope.date = date;
    $scope.nodeID = nodeID;
  });
});

app.controller('house-line-chart', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;

  $http ({
    url : '/houses/' + date + '/' + nodeID + '/' + houseID,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = houseChart(data);
    var houseLineCtx = document.getElementById('house-line-chart').getContext('2d');
    var houseLineChart = new Chart(houseLineCtx).Line(chartData,  {
                                                            responsive : true,
                                                            pointHitDetectionRadius : 5
                                                          });

    $scope.rows = data;
    $scope.date = date;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
  });
});

app.controller('transformer-line-chart', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var houseID = $routeParams.houseID;

  $http ({
    url : '/transformer/' + date,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = transformerChart(data);
    var transformerLineCtx = document.getElementById('transformer-line-chart').getContext('2d');
    var transformerLineChart = new Chart(transformerLineCtx).Line(chartData,  {
                                                            responsive : true,
                                                            pointHitDetectionRadius : 5
                                                          });

    $scope.rows = data;
    $scope.date = date;
  });
});

app.controller('devices-multiple-charts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;

  $http ({
    url : '/devices/' + date + '/' + type + '/' + nodeID + '/' + houseID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    var newData = parseResponse(response);
    var datasets = [];
    var info = {
      loads: {
        name: 'Total Load',
        unit: 'kW'
      },
      bidPrices: {
        name: 'Bid Price',
        unit: ' ¢'
      },
      bidQuantities: {
        name: 'Bid Quantity',
        unit: 'kW'
      }
    };
    _.each(newData.indicators, function(value, key){
      datasets.push({
        data: createBatches(value),
        name: info[key].name,
        type: 'spline',
        unit: info[key].unit
      });
    });

    var timestampsList = newData.timestamps;
    var datasetIndicatorsList = {'datasets' : datasets};

    devicesMultipleCharts(datasetIndicatorsList, timestampsList);

    var newType;

    if(type=='wh') {
      newType = 'Waterheater';
    }

    if(type=='ac') {
      newType = 'Air Condition';
    }

    $scope.date = date;
    $scope.type = type;
    $scope.newType = newType;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
  });
});

app.controller('devices-multiple-axes-chart', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;


  $http ({
    url : '/devices/' + date + '/' + type + '/' + nodeID + '/' + houseID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    devicesMultipleAxesChart(response);

    var newType;

    if(type=='wh') {
      newType = 'Waterheater';
    }

    if(type=='ac') {
      newType = 'Air Condition';
    }

    $scope.date = date;
    $scope.type = type;
    $scope.newType = newType;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
  });
});

app.controller('market-line-highcharts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;

  $http ({
    url : '/market/' + date,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    marketHighcharts(response);

    $scope.data = response;
    $scope.date = date;
  });
});

app.controller('market-spider-highcharts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;

  $http ({
    url : '/market/' + date,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    marketHighchartsSpider(response);

    $scope.data = response;
    $scope.date = date;
  });
});


app.controller('devices-heatmap-load', function($scope, $http, $route, $routeParams) {
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;


  $http ({
    url : '/devices/' + type + '/' + nodeID + '/' + houseID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    devicesHeatmapLoad(response);

    var newType;

    if(type=='wh') {
      newType = 'Waterheater';
    }

    if(type=='ac') {
      newType = 'Air Condition';
    }

    $scope.type = type;
    $scope.newType = newType;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
  });
});

app.controller('devices-heatmap-price', function($scope, $http, $route, $routeParams) {
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;


  $http ({
    url : '/devices/' + type + '/' + nodeID + '/' + houseID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    devicesHeatmapPrice(response);

    var newType;

    if(type=='wh') {
      newType = 'Waterheater';
    }

    if(type=='ac') {
      newType = 'Air Condition';
    }

    $scope.type = type;
    $scope.newType = newType;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
  });
});

app.controller('devices-heatmap-quantity', function($scope, $http, $route, $routeParams) {
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;


  $http ({
    url : '/devices/' + type + '/' + nodeID + '/' + houseID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    devicesHeatmapQuantity(response);

    var newType;

    if(type=='wh') {
      newType = 'Waterheater';
    }

    if(type=='ac') {
      newType = 'Air Condition';
    }

    $scope.type = type;
    $scope.newType = newType;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
  });
});

app.controller('energy-sources-multiple-axes-chart', function($scope, $http, $route, $routeParams) {

  var date = $routeParams.date;
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;

  $http ({
    url : '/energy-sources/' + date + '/' + type + '/' + nodeID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    energySourcesMultipleAxesChart(response);

    $scope.date = date;
    $scope.type = type;
    $scope.nodeID = nodeID;
  });
});

app.controller('triplex-meter-multiple-axes-chart', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;

  $http ({
    url : '/triplex-meter/' + date + '/' + nodeID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    triplexMeterMultipleAxesChart(response);

    $scope.date = date;
    $scope.nodeID = nodeID;
  });
});

app.controller('triplex-meter-highcharts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;

  $http ({
    url : '/triplex-meter/' + date + '/' + nodeID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    triplexMeterHighcharts(response);

    $scope.date = date;
    $scope.nodeID = nodeID;
  });
});

app.controller('triplex-meter-spider-highcharts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;

  $http ({
    url : '/triplex-meter/' + date + '/' + nodeID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    triplexMeterSpiderHighcharts(response);

    $scope.date = date;
    $scope.nodeID = nodeID;
  });
});

app.controller('date-picker-controller', ['$scope', function ($scope, $filter) {

  var vm = this;

  vm.valuationDate = new Date();
  vm.valuationDatePickerIsOpen = false;
  vm.opens = [];

  $scope.$watch(function () {
       return vm.valuationDatePickerIsOpen;
   },function(value){
      vm.opens.push("valuationDatePickerIsOpen: " + value + " at: " + new Date());
   });

  $scope.initialDate = new Date('Aug 01, 2000');
  $scope.startDate = new Date('Aug 01, 2000');
  $scope.endDate = new Date('Aug 07, 2000');

  vm.valuationDatePickerOpen = function ($event) {

      if ($event) {
          $event.preventDefault();
          $event.stopPropagation(); // This is the magic
      }
      this.valuationDatePickerIsOpen = true;
  };

  $scope.range = function(min, max, step){
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) input.push(i);
    return input;
  };
}]);

app.controller('houses-multiple-charts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;
  var phase = $routeParams.phase;

  $http ({
    url : '/houses/' + date + '/' + nodeID + '/' + houseID + '/' + phase,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    housesMultipleLineChart(response);

    $scope.data = response;
    $scope.date = date;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
    $scope.phase = phase;
  });
});

app.controller('houses-spider-chart', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;
  var phase = $routeParams.phase;

  $http ({
    url : '/houses/' + date + '/' + nodeID + '/' + houseID + '/' + phase,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    housesSpiderChart(response);

    $scope.data = response;
    $scope.date = date;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
    $scope.phase = phase;
  });
});

app.controller('energy-sources-line-chart-highcharts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;
  var type = $routeParams.type;

  $http ({
    url : '/energy-sources/' + date + '/' + type + '/' + nodeID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    energySourcesLineChartHighcharts(response);

    $scope.data = response;
    $scope.date = date;
    $scope.nodeID = nodeID;
    $scope.type = type;
  });
});

app.controller('energy-sources-spider-chart-highcharts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;
  var type = $routeParams.type;

  $http ({
    url : '/energy-sources/' + date + '/' + type + '/' + nodeID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    energySourcesSpiderChartHighcharts(response);

    $scope.data = response;
    $scope.date = date;
    $scope.nodeID = nodeID;
    $scope.type = type;
  });
});

app.controller('transformer-line-chart-highcharts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;

  $http ({
    url : '/transformer/' + date,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    transformerLineChartHighcharts(response);

    $scope.data = response;
    $scope.date = date;
  });
});

app.controller('transformer-spider-chart-highcharts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;

  $http ({
    url : '/transformer/' + date,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    transformerSpiderChartHighcharts(response);

    $scope.data = response;
    $scope.date = date;
  });
});

app.controller('nodes-graph', function($scope, $http) {

  $http ({
    url : '/nodes-all/',
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    var nodes = new vis.DataSet([
        {id: 611, label: '611'},
        {id: 632, label: '632'},
        {id: 645, label: '645'},
        {id: 646, label: '646'},
        {id: 652, label: '652'},
        {id: 671, label: '671'},
        {id: 675, label: '675'},
        {id: 680, label: '680'},
        {id: 684, label: '684'},
        {id: 692, label: '692'},
        {id: 6321, label: '6321'},
        {id: 6711, label: '6711'}
    ]);

    var fromNode = response.map(function(entry) {
      return entry.nodeID;
    });

    var toNode = response.map(function(entry) {
      return entry.toNodeID;
    });

    // create an array with edges
    var edges = new vis.DataSet([
        // {from: fromNode, to: toNode},
        {from: 611, to: null},
        {from: 632, to: 645},
        {from: 632, to: 6321},
        {from: 645, to: 646},
        {from: 646, to: null},
        {from: 6321, to: 671},
        {from: 671, to: 680},
        {from: 680, to: null},
        {from: 671, to: 684},
        {from: 652, to: null},
        {from: 675, to: null},
        {from: 692, to: null},
        {from: 6711, to: null}
    ]);

    // create a network
    var container = document.getElementById('mynetwork');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};

    // initialize your network!
    var network = new vis.Network(container, data, options);

  });
});

app.controller('transformer-graphical-representation', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var time = $routeParams.time;
  $http ({
    url : '/transformer/' + date + '/' + time,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    var nodes = new vis.DataSet([
        {id: 611, label: '611'},
    ]);

    var fromNode = response.map(function(entry) {
      return entry.nodeID;
    });

    var toNode = response.map(function(entry) {
      return entry.toNodeID;
    });

    // create an array with edges
    var edges = new vis.DataSet([
        // {from: fromNode, to: toNode},
        {from: 611, to: null},
    ]);

    // create a network
    var container = document.getElementById('mynetwork');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};

    // initialize your network!
    var network = new vis.Network(container, data, options);

  });
});
