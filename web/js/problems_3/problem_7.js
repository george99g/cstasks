function solve(args){var first=parseFloat(args[0]);var second=parseFloat(args[1]);var third=parseFloat(args[2]);var fourth=parseFloat(args[3]);var fifth=parseFloat(args[4]);if(first>second){if(first>third){if(first>fourth){if(first>fifth){return first;}else{return fifth;}}else{if(fourth>fifth){return fourth;}else{return fifth;}}}else{if(third>fourth){if(third>fifth){return third;}else{return fifth;}}else{if(fourth>fifth){return fourth;}else{return fifth;}}}}else{if(second>third){if(second>fourth){if(second>fifth){return second;}else{return fifth;}}else{if(fourth>fifth){return fourth;}else{return fifth;}}}else{if(third>fourth){if(third>fifth){return third;}else{return fifth;}}else{if(fourth>fifth){return fourth;}else{return fifth;}}}}}console.log(solve(['5','2','2','4','1']));console.log(solve(['-2','-22', '1','0','0']));console.log(solve(['-2','4','3','2','0']));console.log(solve(['0','-2.5','0','5','5']));console.log(solve(['-3','-0.5','-1.1','-2','-0.1']));
