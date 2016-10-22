#include <vector>
#include <iostream>

std::string get_string(std::vector<std::string> vars)
{
	std::string return_string;
	if(vars.size()==2)
	{
		return_string += "if(";
		return_string += vars[0];
		return_string += ">";
		return_string += vars[1];
		return_string += "){return ";
		return_string += vars[0];
		return_string += ";}else{return ";
		return_string += vars[1];
		return_string += ";}";
		return return_string;
	}
	else
	{
		return_string += "if(";
		return_string += vars[0];
		return_string += ">";
		return_string += vars[1];
		return_string += "){";
		std::vector<std::string> new_vector;
		new_vector.push_back(vars[0]);
		for(unsigned i = 2; i < vars.size(); i++)
			new_vector.push_back(vars[i]);
		return_string += get_string(new_vector);
		return_string += "}else{";
		new_vector.clear();
		for(unsigned i = 1; i < vars.size(); i++)
			new_vector.push_back(vars[i]);
		return_string += get_string(new_vector);
		return_string += "}";
	}
}

int main()
{
	std::string output;
	output += "function solve(args)"
			  "{var first=parseFloat(args[0]);"
			  "var second=parseFloat(args[1]);"
			  "var third=parseFloat(args[2]);"
			  "var fourth=parseFloat(args[3]);"
			  "var fifth=parseFloat(args[4]);";
	std::vector<std::string> vec = {
		"first", "second",
		"third", "fourth",
		"fifth"
	};
	output += get_string(vec);
	output += "}"
			  "console.log(solve(['5','2','2','4','1']));"
			  "console.log(solve(['-2','-22', '1','0','0']));"
			  "console.log(solve(['-2','4','3','2','0']));"
			  "console.log(solve(['0','-2.5','0','5','5']));"
			  "console.log(solve(['-3','-0.5','-1.1','-2','-0.1']));";
	std::cout<<output<<std::endl;
	return 0;
}
