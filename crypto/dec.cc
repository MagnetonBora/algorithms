
#include <iostream>

using namespace std;

/* Шифр Виженера */

void crypto_table()
{
	const int len = 26;
        char table[len][len] = { 0 };

        for(int i = 0; i < len; i++)
        {
		table[i][i] = 'A' + i;
		for(int j = 0; j < i; j++)
                {
                        table[i][j] = table[j][i] = 'A' + ( (i + j) % 26 );
                }
        }
}

char* enc(char* src, char* key)
{
	int src_len = std::char_traits<char>::length(src);
	int key_len = std::char_traits<char>::length(key);

	char* text = new char[src_len + 1];

	for(int i = 0; i < src_len; i++)
	{
//		text[i] = 'A' + ( ( src[i] + key[ i % key_len ] ) % 26 );
		text[i] = ( ( src[i] + key[ i % key_len ] ) % 256 );
	}

	return text;
}

char* dec(char* src, char* key)
{
	int src_len = std::char_traits<char>::length(src);
	int key_len = std::char_traits<char>::length(key);

	char* out = new char[src_len + 1];

	for(int i = 0; i < src_len; i++)
	{
//		out[i] = 'A' + ( ( src[i] - key[ i % key_len ] + 26 ) % 26 );
		out[i] = ( ( src[i] - key[ i % key_len ] + 256 ) % 256 );
	}

	return out;
}

int main(int argc, char* argv[])
{
	char *str = (char*)"THIS IS A TEST";
	char *key = (char*)"SECRET";

	char* enc_text = enc( str, key );
	char* dec_text = dec( enc_text, key );

	std::cout << "Message: " << str << std::endl;
	std::cout << "Encrypted text: " << enc_text << std::endl;
	std::cout << "Dencrypted text: " << dec_text << std::endl;

	if (enc_text) {
		delete[] enc_text;
	};

	if (dec_text) {
		delete[] dec_text;
	};

	return 0;
}
