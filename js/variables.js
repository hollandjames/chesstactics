
var solutionObj = {
     solutionOne: ['e4f6','e7f6','c4d3','f8e8','d3h7','g8h8','h7g6'],
     solutionTwo:['f5g3','h1h2','g3f1','h2h1','g6g3','f6g4','g3h2','g4h2','f1g3'],
     solutionThree:['c1e2','g1f1','g7f6','e5f6','e8b8','f1e2','b2b1'],
     solutionFour: ['f5f4','d6d5','h5h4','d5e4','f4f3','g2f3','h4h3'],
     solutionFive: ['h4h6','g7h6', 'g5h6','g8f8','g1g8','f8g8','h6h7','g8f8','h7h8'],
     solutionSix: ['f6e4','d1d3','g7c3','e1d1','e4f2'],
     solutionSeven: ['d6f8','f7f8','f6f7','e8g7','b2g7','f8g7','d1d8'],
     solutionEight: ['h3h6','a6a5','b2a2','a1a2','e2e1'],
     solutionNine: ['h1h7','g7h7','e6f7','h7h6','e1h1','h6g5','h1h5','g6h5','f7h5'],
     solutionTen: ['f5c2','b1c2','b4b3','c4b3','a3d6']
};

var allSolutions =[];

Object.keys(solutionObj).forEach(function(solution) {

    allSolutions.push(solutionObj[solution]);
});


var players = ["Goldstein-Tomilin, Moscow, 1965",
"Fedder-Westerinen, Roskilde, 1978",
"Kristiansen-Berg, Aarbus, 1990",
"Pomar-Cuadras, Olot, 1974",
"Spielmann-L'Hermet, Magdeburg, 1927",
"Svedtsikov-Jermolinski, Odessa, 1981",
"Nekrassov-Buturin, Lvov, 1981",
"Sansin-Polovodin, Moscow,1989",
"Neimanis-Michailov, Wentspils, 1986",
"Wockenfus-Timman, Bad Lauterberg, 1977"
];

var puzzleArray =
['r1bq1rk1/ppp1bp1p/2n4Q/8/2BpN3/8/PPP2PPP/RN3RK1 w - - 0 1',
'6rk/p2b4/3p1Nqp/2pPpn2/P1P4p/5P1P/Q2B1NP1/6RK b - - 0 1',
'4r1k1/6qp/p3pRp1/4B3/3P4/8/1pQ2PPP/2n3K1 b - - 0 1',
'8/8/3K1k2/5p1p/4p1p1/4P1P1/5PP1/8 b - - 0 1',
'r2r2k1/p2nqpp1/2b1p2p/4B1P1/2p4Q/3B4/PPP2P1P/2KR2R1 w - - 0 1',
'5rk1/3b1pbp/3p1np1/2pP4/8/1P2qP2/P1B1N2P/R2QK2R b KQ - 0 1',
'r1b1n2k/r4q1p/2pQ1P2/1p3P2/4P3/1P6/1BP4P/2KR2R1 w - - 0 1',
'8/P4p1k/K7/2R5/8/7r/1r2p3/R7 b - - 0 1',
'r1b5/6k1/p3Qpp1/8/1q4P1/5pK1/1Pr1N3/4R2R w - - 0 1',
'r5kr/1p3ppp/3Q4/3P1b2/1pBR4/q4P2/P1P3PP/1K5R b - - 0 1'
];