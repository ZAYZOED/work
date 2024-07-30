package com.tessi.portail.accueilCourtier.model;


import com.tessi.portail.accueilCourtier.configuration.AccueilCourtierConfiguration;

public class AccueilCourtierDto {

    private boolean initFromDb;
    private boolean showNbContratCollectif;
    private boolean showLigne;
    private Long countCC;
    private Long countAS;
    private Long countAD;
    private Float sumCA;

    public Long getCountCC() {
        return countCC;
    }

    public Long getCountAS() {
        return countAS;
    }

    public Long getCountAD() {
        return countAD;
    }

    public Float getSumCA() {
        return sumCA;
    }

    public void setCountCC(Long countCC) {
        this.countCC = countCC;
    }

    public void setCountAS(Long countAS) {
        this.countAS = countAS;
    }

    public void setCountAD(Long countAD) {
        this.countAD = countAD;
    }

    public void setSumCA(Float sumCA) {
        this.sumCA = sumCA;
    }



    public boolean isInitFromDb() {
        return initFromDb;
    }

    public void setInitFromDb(boolean initFromDb) {
        this.initFromDb = initFromDb;
    }

    public boolean isShowNbContratCollectif() {
        return showNbContratCollectif;
    }

    public void setShowNbContratCollectif(boolean showNbContratCollectif) {
        this.showNbContratCollectif = showNbContratCollectif;
    }

    public boolean isShowLigne() {
        return showLigne;
    }

    public void setShowLigne(boolean showLigne) {
        this.showLigne = showLigne;
    }
}
