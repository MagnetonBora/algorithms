#include <iostream>

using namespace std;

/* Шифр Виженера */

void enc(char* src, char* key, char* buffer)
{
	const int len = 26;

        char table[len][len] = { 0 };

	int src_len = std::char_traits<char>::length(src);
	int key_len = std::char_traits<char>::length(key);

	int key_base = src_len >= key_len ? key_len : src_len;

        for(int i = 0; i < len; i++)
        {
		table[i][i] = 'A' + i;
		for(int j = 0; j < i; j++)
                {
                        table[i][j] = table[j][i] = 'A' + ( (i + j) % 26 );
                }
        }

	for(int i = 0; i < src_len; i++)
	{
		char s = src[i];
		char k = key[ i % key_base ];
		buffer[i] = table[ s % 65 ][ k % 65 ];
	}
}

char* dec(char* src, char* key)
{
	// ...
}

int main(int argc, char* argv[])
{
	char buffer[256] = { 0 };

	char *str = (char*)"HELLO";
	char *key = (char*)"SKJFDKASJDKFASD";

	enc( str, key, buffer );

	int len = std::char_traits<char>::length(str);

	for(int i = 0; i < len; i++)
	{
		std::cout << buffer[i] << " ";
	}
	std::cout << std::endl;
	return 0;
}
