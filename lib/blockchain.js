
const params = {
  LAST_POW_BLOCK: 345600,
  RAMP_TO_BLOCK: 960
};

const avgBlockTime = 90; // 1.5 minutes (90 seconds)

const blocksPerDay = (24 * 60 * 60) / avgBlockTime; // 960

const blocksPerWeek = blocksPerDay * 7; // 6720

const blocksPerMonth = (blocksPerDay * 365.25) / 12; // 29220

const blocksPerYear = blocksPerDay * 365.25; // 350640

const mncoins = 10000.0;

const getMNBlocksPerDay = (mns) => {
  return blocksPerDay / mns;
};

const getMNBlocksPerWeek = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 52);
};

const getMNBlocksPerMonth = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 12);
};

const getMNBlocksPerYear = (mns) => {
  return getMNBlocksPerDay(mns) * 365.25;
};

const getMNSubsidy = (nHeight = 0, nMasternodeCount = 0, nMoneySupply = 0) => {
  const blockValue = getSubsidy(nHeight);
  let ret = 0.0;

	if(nHeight > 0 && nHeight <= 25000) {
        ret = blockValue / 100 * 75;
	} else if (nHeight > 25000 && nHeight <= 199999) {
        ret = blockValue / 100 * 75;
	} else if (nHeight > 199999 && nHeight <= 2839600) {
        ret = blockValue / 100 * 75;
	} else if (nHeight > 2839600 && nHeight <= 4839600) {
        ret = blockValue / 100 * 75;
	} else if (nHeight > 4839600) {
      }



  return ret;
};

const getSubsidy = (nHeight = 1) => {
  let nSubsidy = 0.0;
  let nSlowSubsidy = 50.0;

	if (nHeight == 0) return 5000000 * COIN;

	int64_t nSubsidy = 0;

	if(nHeight > 0 && nHeight <= 75000) {
        nSubsidy = 10 * COIN;
	} else if (nHeight > 75000 && nHeight <= 150000) {
		nSubsidy = 10.75 * COIN;
	} else if (nHeight > 150000 && nHeight <= 225000) {
		nSubsidy = 11.5 * COIN;
	} else if (nHeight > 225000 && nHeight <= 300000) {
		nSubsidy = 12.25 * COIN;
	} else if (nHeight > 300000 && nHeight <= 375000) {
		nSubsidy = 13 * COIN;
	} else if (nHeight > 375000 && nHeight <= 450000) {
		nSubsidy = 13.75 * COIN;
	} else if (nHeight > 450000 && nHeight <= 525000) {
		nSubsidy = 14.5 * COIN;
	} else if (nHeight > 525000 && nHeight <= 600000) {
		nSubsidy = 15.25 * COIN;
	} else if (nHeight > 600000 && nHeight <= 675000) {
		nSubsidy = 16 * COIN;
	} else if (nHeight > 675000 && nHeight <= 750000) {
		nSubsidy = 16.75 * COIN;
	} else if (nHeight > 750000 && nHeight <= 825000) {
		nSubsidy = 17.5 * COIN;
	} else if (nHeight > 825000 && nHeight <= 900000) {
		nSubsidy = 18.25 * COIN;
	} else if (nHeight > 900000 && nHeight <= 975000) {
		nSubsidy = 19 * COIN;
	} else if (nHeight > 975000 && nHeight <= 1050000) {
		nSubsidy = 19.75 * COIN;
	} else if (nHeight > 1050000 && nHeight <= 1125000) {
		nSubsidy = 20.5 * COIN;
	} else if (nHeight > 1125000 && nHeight <= 1200000) {
		nSubsidy = 21.25 * COIN;
	} else if (nHeight > 1200000 && nHeight <= 1275000) {
		nSubsidy = 22 * COIN;
	} else if (nHeight > 1275000 && nHeight <= 1350000) {
		nSubsidy = 22.75 * COIN;
	} else if (nHeight > 1350000 && nHeight <= 1425000) {
		nSubsidy = 23.5 * COIN;
	} else if (nHeight > 1425000 && nHeight <= 1500000) {
		nSubsidy = 24.25 * COIN;
	} else if (nHeight > 1500000 && nHeight <= 1575000) {
		nSubsidy = 25 * COIN;
	} else if (nHeight > 1575000 && nHeight <= 1625000) {
		nSubsidy = 25.75 * COIN;
	} else if (nHeight > 1625000 && nHeight <= 1700000) {
		nSubsidy = 26.5 * COIN;
	} else if (nHeight > 1700000 && nHeight <= 1775000) {
		nSubsidy = 27.25 * COIN;
	} else if (nHeight > 1775000 && nHeight <= 1850000) {
		nSubsidy = 28 * COIN;
	} else if (nHeight > 1850000 && nHeight <= 1925000) {
		nSubsidy = 28.75 * COIN;
	} else if (nHeight > 1925000 && nHeight <= 2000000) {
		nSubsidy = 29.5 * COIN;
	} else if (nHeight > 2000000 && nHeight <= 2075000) {
		nSubsidy = 30.25 * COIN;
	} else if (nHeight > 2075000 && nHeight <= 2105000) {
		nSubsidy = 31 * COIN;
	} else if (nHeight > 2105000 && nHeight <= 2125000) {
		nSubsidy = 31.75 * COIN;
	} else if (nHeight > 2125000 && nHeight <= 2200000) {
		nSubsidy = 32.5 * COIN;
	} else if (nHeight > 2200000 && nHeight <= 2275000) {
		nSubsidy = 33.25 * COIN;
	} else if (nHeight > 2275000 && nHeight <= 2350000) {
		nSubsidy = 34 * COIN;
	} else if (nHeight > 2350000 && nHeight <= 2425000) {
		nSubsidy = 34.75 * COIN;
    } else if (nHeight > 2425000 && nHeight <= 2500000) {
		nSubsidy = 35.5 * COIN;
	} else if (nHeight > 2500000 && nHeight <= 2575000) {
		nSubsidy = 36.25 * COIN;
	} else if (nHeight > 2575000 && nHeight <= 2650000) {
		nSubsidy = 37 * COIN;
    } else if (nHeight > 2650000 && nHeight <= 2725000) {
		nSubsidy = 37.75 * COIN;
	} else if (nHeight > 2725000 && nHeight <= 2800000) {
		nSubsidy = 38.5 * COIN;
	} else if (nHeight > 2800000 && nHeight <= 2875000) {
		nSubsidy = 39.25 * COIN;
	} else if (nHeight > 2875000 && nHeight <= 2950000) {
		nSubsidy = 40 * COIN;
	} else if (nHeight > 2950000 && nHeight <= 2875000) {
		nSubsidy = 40.75 * COIN;
	} else if (nHeight > 2875000 && nHeight <= 2950000) {
		nSubsidy = 41.5 * COIN;
	} else if (nHeight > 2950000 && nHeight <= 3025000) {
		nSubsidy = 42.25 * COIN;
	} else if (nHeight > 3025000 && nHeight <= 3100000) {
		nSubsidy = 43 * COIN;
	} else if (nHeight > 3100000 && nHeight <= 3175000) {
		nSubsidy = 0.01 * COIN;
	} else if (nHeight > 3175000 && nHeight <= 3250000) {
		nSubsidy = 0.01 * COIN;
	} else if (nHeight > 3250000) {
		nSubsidy = 0 * COIN;
  } else {
    nSubsidy = 0;
  }

  return nHeight >= params.RAMP_TO_BLOCK ? nSubsidy : nSlowSubsidy;
};

const getROI = (subsidy, mns) => {
  return ((getMNBlocksPerYear(mns) * subsidy) / mncoins) * 100.0;
};

const isAddress = (s) => {
  return typeof(s) === 'string' && s.length === 34;
};

const isBlock = (s) => {
  return !isNaN(s) || (typeof(s) === 'string' && s.substr(0, 4) === '0000');
};

const isTX = (s) => {
  return typeof(s) === 'string';
};

module.exports = {
  avgBlockTime,
  blocksPerDay,
  blocksPerMonth,
  blocksPerWeek,
  blocksPerYear,
  mncoins,
  params,
  getMNBlocksPerDay,
  getMNBlocksPerMonth,
  getMNBlocksPerWeek,
  getMNBlocksPerYear,
  getMNSubsidy,
  getSubsidy,
  getROI,
  isAddress,
  isBlock,
  isTX
};
