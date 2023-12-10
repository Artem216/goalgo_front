import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";

import { IStocksNames } from "../../app/models/IStocksNames.ts";

import { UserApiServiceInstance } from "../../app/UserApiService.ts";

export default function ComboBox({ handleSelect }) {
  const handleChange = (event) => {
    handleSelect(event.target.value);
  };

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={stocks}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} onChange={handleChange} />
        )}
      />
    </>
  );
}

const stocks: IStocksNames[] = [
  { label: "SMLT" },
  { label: "MGNT" },
  { label: "LKOH" },
  { label: "KZOSP" },
  { label: "RTKM" },
  { label: "RUAL" },
  { label: "SBER" },
  { label: "SBERP" },
  { label: "SELG" },
  { label: "SFTL" },
  { label: "SGZH" },
  { label: "SIBN" },
  { label: "PHOR" },
  { label: "SNGS" },
  { label: "SNGSP" },
  { label: "SPBE" },
  { label: "IRAO" },
  { label: "HYDR" },
  { label: "TATN" },
  { label: "MAGN" },
  { label: "ROSN" },
  { label: "GMKN" },
  { label: "MOEX" },
  { label: "OKEY" },
  { label: "OGKB" },
  { label: "NVTK" },
  { label: "PIKK" },
  { label: "PLZL" },
  { label: "NLMK" },
  { label: "POLY" },
  { label: "NKNCP" },
  { label: "POSI" },
  { label: "QIWI" },
  { label: "MVID" },
  { label: "MTSS" },
  { label: "MTLR" },
  { label: "RASP" },
  { label: "AFKS" },
  { label: "ROLO" },
  { label: "MRKC" },
  { label: "TATNP" },
  { label: "OZON" },
  { label: "GLTR" },
  { label: "YNDX" },
  { label: "CHMF" },
  { label: "CBOM" },
  { label: "DSKY" },
  { label: "VKCO" },
  { label: "VTBR" },
  { label: "ENPG" },
  { label: "ENRU" },
  { label: "ETLN" },
  { label: "BELU" },
  { label: "FEES" },
  { label: "AGRO" },
  { label: "FLOT" },
  { label: "TCSG" },
  { label: "ALRS" },
  { label: "GAZP" },
  { label: "AFLT" },
  { label: "BANEP" },
  { label: "LENT" },
  { label: "GCHE" },
  { label: "TGKA" },
  { label: "FESH" },
  { label: "AQUA" },
  { label: "LSNGP" },
  { label: "GEMC" },
  { label: "UPRO" },
  { label: "APTK" },
  { label: "RSTI" },
  { label: "ABRD" },
  { label: "IRKT" },
  { label: "KZOS" },
  { label: "MRKP" },
  { label: "MDMG" },
  { label: "FIXP" },
  { label: "TTLK" },
  { label: "RNFT" },
  { label: "FIVE" },
  { label: "LNZL" },
  { label: "NMTP" },
  { label: "TRMK" },
  { label: "RTKMP" },
  { label: "KMAZ" },
  { label: "MGTSP" },
  { label: "MSNG" },
  { label: "BSPB" },
  { label: "LSRG" },
  { label: "MTLRP" },
  { label: "LNZLP" },
  { label: "UNAC" },
  { label: "LSNG" },
  { label: "ISKJ" },
  { label: "MSRS" },
  { label: "BANE" },
  { label: "SVET" },
  { label: "BRZL" },
  { label: "ELTZ" },
  { label: "AMEZ" },
  { label: "CIAN" },
  { label: "NKNC" },
  { label: "RSTIP" },
  { label: "KTSB" },
  { label: "MRKV" },
  { label: "AKRN" },
  { label: "INGR" },
  { label: "MRKZ" },
  { label: "SVAV" },
  { label: "LIFE" },
  { label: "CNTL" },
  { label: "RGSS" },
  { label: "CNTLP" },
  { label: "MRKY" },
  { label: "ROST" },
  { label: "RENI" },
  { label: "MRKU" },
  { label: "GTRK" },
  { label: "NSVZ" },
  { label: "KTSBP" },
  { label: "KAZT" },
  { label: "DVEC" },
  { label: "YAKG" },
  { label: "RKKE" },
  { label: "VEON-RX" },
  { label: "HHRU" },
  { label: "KUBE" },
  { label: "KUZB" },
  { label: "TRNFP" },
  { label: "MSTT" },
  { label: "PMSB" },
  { label: "BLNG" },
  { label: "EELT" },
  { label: "UNKL" },
  { label: "KROT" },
  { label: "HIMCP}" },
  { label: "NNSB" },
  { label: "TGKBP" },
  { label: "PMSBP" },
  { label: "TUZA" },
  { label: "TORSP" },
  { label: "VSMO" },
  { label: "KRKNP" },
  { label: "KAZTP" },
  { label: "VJGZP" },
  { label: "MGTS" },
  { label: "NKHP" },
  { label: "NFAZ" },
  { label: "KLSB" },
  { label: "VRSB" },
  { label: "GEMA" },
  { label: "MRKK" },
  { label: "RBCM" },
  { label: "IGSTP" },
  { label: "NAUK" },
  { label: "PAZA" },
  { label: "TGKB" },
  { label: "CHGZ" },
  { label: "RUSI" },
  { label: "TGKN" },
  { label: "KGKC" },
  { label: "TASB" },
  { label: "USBN" },
  { label: "RZSB" },
  { label: "KMEZ" },
  { label: "LPSB" },
  { label: "KMTZ" },
  { label: "VJGZ" },
  { label: "KRKOP" },
  { label: "SFIN" },
  { label: "CHMK" },
  { label: "DZRD" },
  { label: "KRSBP" },
  { label: "UKUZ" },
  { label: "AVAN" },
  { label: "BSPBP" },
  { label: "MRKS" },
  { label: "STSBP" },
  { label: "SARE" },
  { label: "JNOS" },
  { label: "BISVP" },
  { label: "SAGO" },
  { label: "ARSA" },
  { label: "NNSBP" },
  { label: "VGSBP" },
  { label: "VGSB" },
  { label: "WTCMP}" },
  { label: "TASBP" },
  { label: "ZILL" },
  { label: "WTCM" },
  { label: "JNOSP" },
  { label: "RTSB" },
  { label: "MAGEP" },
  { label: "IGST" },
  { label: "KGKCP" },
  { label: "KRSB" },
  { label: "VSYD" },
  { label: "UTAR" },
  { label: "DZRDP" },
  { label: "SAREP" },
  { label: "TORS" },
  { label: "GAZA" },
  { label: "VRSBP" },
  { label: "DIOD" },
  { label: "VLHZ" },
  { label: "GAZAP" },
  { label: "VSYDP" },
  { label: "RTGZ" },
  { label: "ROSB" },
  { label: "MISB" },
  { label: "LVHK" },
  { label: "KROTP" },
  { label: "KBSB" },
  { label: "ZVEZ" },
  { label: "SLEN" },
  { label: "TNSE" },
  { label: "RDRB" },
  { label: "MRSB" },
  { label: "OMZZP" },
  { label: "CHKZ" },
  { label: "YKEN" },
  { label: "ASSB" },
  { label: "MAGE" },
  { label: "NKSH" },
  { label: "UCSS" },
  { label: "RTSBP" },
  { label: "MISBP" },
  { label: "HMSG" },
  { label: "YRSB" },
  { label: "YRSBP" },
  { label: "MFGS" },
  { label: "SAGOP" },
  { label: "KRKN" },
  { label: "STSB" },
  { label: "MFGSP" },
  { label: "YKENP" },
  { label: "KCHE" },
  { label: "URKZ" },
];
