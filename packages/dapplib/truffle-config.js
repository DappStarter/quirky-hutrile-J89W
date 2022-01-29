require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name reflect still mixture harvest glimpse equal gift'; 
let testAccounts = [
"0xbd9a5b57a0831203c2abdeb61df089e0a8477a127a199708fa582a0b3d8feb3a",
"0x2ef93303d1a65c20a33cfac370b871b9ecef25634184a935867be649c3de5b3c",
"0xb2a14e730996ac6706c986a143646bf140e94f61e0ff34b8ade460d40ab534f2",
"0x4d80f03cc993c88676b65fc61bd60749853733625be45dc90e55ae090edd5caa",
"0xd3149a89d12cfc9881c194f5900f7e39a40cb823d7f1cb0fe4fa695b3ecd2356",
"0x0b4e9d0df2581dd4ca371eb0dd31813bebe6a183a582bcc5d03421a6c75e1d19",
"0xe3fb53eb0cbcd26f18ec7c959d80ea3a34ebe98b0c81e71c45f10444fa27771f",
"0x621318a74bc0405b199af697a6a64fb5bcfd6761f9800fd409ea802b51d252fc",
"0xe9c41c27d7f34f5926b9c76e0d479857bddae98ab125a2fabb541fcdb29127ca",
"0x648bcc6e3af4d57a79cb44673705513939448889c2101084fe4e56b97a505345"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

