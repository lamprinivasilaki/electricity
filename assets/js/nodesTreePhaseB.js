function nodesTreePhaseB(response) {
    var voltageB611 = response[0].voltageRealB611;
    var voltageB632 = response[0].voltageRealB632;
    var voltageB645 = response[0].voltageRealB645;
    var voltageB646 = response[0].voltageRealB646;
    var voltageB652 = response[0].voltageRealB652;
    var voltageB671 = response[0].voltageRealB671;
    var voltageB675 = response[0].voltageRealB675;
    var voltageB680 = response[0].voltageRealB680;
    var voltageB684 = 0;
    var voltageB692 = response[0].voltageRealB692;
    var voltageB6321 = response[0].voltageRealB6321;
    var voltageB6711 = response[0].voltageRealB6711;

    var currentOutB632_645 = response[0].currentB632_645;
    var currentOutB632_6321 = response[0].currentB632_6321;
    var currentOutB645_646 = response[0].currentB645_646;
    var currentOutB6321_671 = response[0].currentB6321_671;
    var currentOutB671_680 = response[0].currentB671_680;
    var currentOutB671_684 = response[0].currentB671_684;

    var nodes = new vis.DataSet([
        {id: 611, label: '611', title: 'B : ' +voltageB611, value: voltageB611},
        {id: 632, label: '632', title: 'B : ' +voltageB632, value: voltageB632},
        {id: 645, label: '645', title: 'B : ' +voltageB645, value: voltageB645},
        {id: 646, label: '646', title: 'B : ' +voltageB646, value: voltageB646},
        {id: 652, label: '652', title: 'B : ' +voltageB652, value: voltageB652},
        {id: 671, label: '671', title: 'B : ' +voltageB671, value: voltageB671},
        {id: 675, label: '675', title: 'B : ' +voltageB675, value: voltageB675},
        {id: 680, label: '680', title: 'B : ' +voltageB680, value: voltageB680},
        {id: 684, label: '684', title: 'B : ' +voltageB684, value: voltageB684},
        {id: 692, label: '692', title: 'B : ' +voltageB692, value: voltageB692},
        {id: 6321, label: '6321', title: 'B : ' +voltageB6321, value: voltageB6321},
        {id: 6711, label: '6711', title: 'B : ' +voltageB6711, value: voltageB6711}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 611, to: null},
        {from: 632, to: 645, title: 'B : ' +currentOutB632_645, value: currentOutB632_645},
        {from: 632, to: 6321, title: 'B : ' +currentOutB632_6321, value: currentOutB632_6321},
        {from: 645, to: 646, title: 'B : ' +currentOutB645_646, value: currentOutB645_646},
        {from: 646, to: null},
        {from: 6321, to: 671, title: 'B : ' +currentOutB6321_671, value: currentOutB6321_671},
        {from: 671, to: 680, title: 'B : ' +currentOutB671_680, value: currentOutB671_680},
        {from: 680, to: null},
        {from: 671, to: 684, title: 'B : ' +currentOutB671_684, value: currentOutB671_684},
        {from: 671, to: 6711, title: 'B : 0 '},
        {from: 671, to: 692, title: 'B : 0 ' },
        {from: 692, to: 675, title: 'B : 0 '},
        {from: 684, to: 652, title: 'B : 0 ' },
        {from: 684, to: 611, title: 'B : 0 '},
        {from: 652, to: null},
        {from: 675, to: null},
        {from: 692, to: null},
        {from: 6711, to: null},

    ]);

    // create a network
    var container = document.getElementById('nodesNetwork');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
      edges: {
        // arrows: {
        //   to: {enabled: true, scaleFactor:1},
        // },
        smooth: {
          type: 'continuous',
          forceDirection: 'none'
        },
        font: {
          align: 'top'
        }
      },
      layout: {
        randomSeed: 632,
        hierarchical: {
          enabled:true,
          levelSeparation: 150,
          direction: 'UD',   // UD, DU, LR, RL
          sortMethod: 'directed' // hubsize, directed
        },
      }
    };

    // initialize your network!
    var network = new vis.Network(container, data, options);
}