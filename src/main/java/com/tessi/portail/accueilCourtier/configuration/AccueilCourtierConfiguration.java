package com.tessi.portail.accueilCourtier.configuration;


import static com.owliance.portail.common.utility.Utility.isNullOrEmpty;

import java.io.Serializable;
import java.util.Set;

import com.owliance.api.model.wvo.Configuration;
import com.owliance.portail.common.utility.TableBuilder;

public class AccueilCourtierConfiguration implements Serializable {
    private static final long serialVersionUID = -3555287103562952894L;
    private Boolean initFromDb = false;
    private Boolean showNbContratCollectif = true;
    private Boolean showLigne = true;

    public AccueilCourtierConfiguration(Set<Configuration> configurations) {
        super();
        if (!isNullOrEmpty(configurations)) {
            initFromDb = true;
            initConfiguration(configurations);
        }
    }

    protected void initConfiguration(Set<Configuration> configurations) {
        for (Configuration ui : configurations) {
            if ("showNbContratCollectif".equals(ui.getKey())) {
                this.showNbContratCollectif = Boolean.valueOf(ui.getValue());
            }
            if ("showLigne".equals(ui.getKey())) {
                this.showLigne = Boolean.valueOf(ui.getValue());
            }
        }
    }

    public Boolean getShowLigne() {
        return showLigne;
    }

    public void setShowLigne(Boolean showLigne) {
        this.showLigne = showLigne;
    }

    public Boolean getShowNbContratCollectif() {
        return showNbContratCollectif;
    }

    public void setShowNbContratCollectif(Boolean showNbContratCollectif) {
        this.showNbContratCollectif = showNbContratCollectif;
    }

    @Override
    public String toString() {

        TableBuilder builder = new TableBuilder();
        builder.addRow("", "", "");
        builder.addRow("+--------------------------", "+", "-----------------------------------+");
        builder.addRow("AccueilCourtier :", "", "");
        builder.addRow("+--------------------------", "+", "-----------------------------------+");
        builder.addRow("showNbContratCollectif ", "+", "" + showNbContratCollectif);
        builder.addRow("+--------------------------", "+", "-----------------------------------+");
        builder.addRow("showLigne ", "+", "" + showLigne);
        builder.addRow("+--------------------------", "+", "-----------------------------------+");
        return builder.toString();
    }





}