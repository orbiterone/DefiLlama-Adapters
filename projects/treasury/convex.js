const ADDRESSES = require('../helper/coreAssets.json')
const { nullAddress, treasuryExports } = require("../helper/treasury");
const convexTreasuryVault = "0x1389388d01708118b497f59521f6943Be2541bb7";
const cvx = "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B";
const cvxCrv = "0x62B9c7356A2Dc64a1969e19C23e4f579F9810Aa7";
const treasuryARB = "0x6111abf720051309012fcdbc2910054e41dcff8c"

module.exports = treasuryExports({
  ethereum: {
    tokens: [
      nullAddress,
      ADDRESSES.ethereum.CRV, // CRV
      ADDRESSES.ethereum.SNX, // SNX
      "0x31429d1856aD1377A8A0079410B297e1a9e214c2", // ANGLE
      ADDRESSES.ethereum.LIDO, // LDO
      "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF", // ALCX
      "0x92E187a03B6CD19CB6AF293ba17F2745Fd2357D5", // DUCK
      ADDRESSES.ethereum.FTM, // FTM
      "0x3472A5A71965499acd81997a54BBA8D852C6E53d", // BADGER
      "0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2", // MTA
      "0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26", // OGN
      "0xCdF7028ceAB81fA0C6971208e83fa7872994beE5", // T
    ],
    owners: [convexTreasuryVault],
    ownTokens: [cvx, cvxCrv],
  },
  arbitrum: {
    tokens: [
      nullAddress,
    ],
    owners: [treasuryARB],
  },
});
