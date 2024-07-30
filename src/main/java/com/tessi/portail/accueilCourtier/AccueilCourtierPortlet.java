package com.tessi.portail.accueilCourtier;

import com.tessi.portail.accueilCourtier.exception.ApplicationException;

import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

/**
 * @author Konstantinos Karavitis
 **/
public class AccueilCourtierPortlet extends AbstractAngularPortlet {
    @Override
    protected AngularPortletConfig createAngularPortletConfiguration(String apiUrl, RenderRequest request, RenderResponse response) throws ApplicationException {
        return new AngularPortletConfig(apiUrl, getResourceBundle(request.getLocale()));
    }
}
