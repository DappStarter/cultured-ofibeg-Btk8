require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember under harvest basket flush giggle'; 
let testAccounts = [
"0x5485842c7e317cf1efccdb24c0476b0dede81190e21a264ca3608ad46aae1f57",
"0xf687adf209898da7bca8c98601048c548f9abf2a4d7cab4169eb4dd988c2da63",
"0xa3f5ecfdfcb6c7901b0a6a66dbb53f5504e1ed4e56a1dee7f777e2235b7c3217",
"0x704c584407e76299a38d0f121fb814442872f38cbf739765643e209d9ce6232c",
"0x5f0e7922c313aa65e5815cf99052a606d5d06db434e03490c14284176cb4227c",
"0xca374aa5c86aacec7d793e06a9f539b03f792c7d66f89d849c34d6e023e1e17d",
"0xdb02d5eb5daf0b456a6505c800c02c5b8c6b1f9d581a63a6edc6e2c2f79089ec",
"0xd54b410f4fc3966f5f19fcb5a2e7a36cba7e5849f0ae8d80a684684e0aff268c",
"0xa343c28ba1ff192a57b542ab46a9c085080fd1d1590f64b69b46b391e5ba91b7",
"0xf963c083e7d7efda5b40c405446d77b7fd633ce67f2a4ef5d7e983675c61df4e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


