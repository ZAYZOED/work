package com.tessi.portail.accueilCourtier.rest;

import com.google.common.collect.Sets;
import com.liferay.portal.kernel.model.User;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.service.ServiceContextThreadLocal;
import com.owliance.api.model.wvo.JustificationUploadableWVO;
import com.owliance.api.model.wvo.JustificationWVO;
import com.owliance.api.model.wvo.UserWVO;
import com.owliance.portail.common.http.BaseResource;
import com.owliance.portail.common.http.GestionPjResources;
import com.owliance.portail.common.http.PortefeuilleRessource;
import com.tessi.portail.accueilCourtier.configuration.AccueilCourtierConfiguration;
import com.tessi.portail.accueilCourtier.exception.ApplicationException;
import com.tessi.portail.accueilCourtier.model.AccueilCourtierDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

/**
 * @author Konstantinos Karavitis
 **/
@RestController
@RequestMapping("/api")
public class AccueilCourtierPortletViewController {

    public static final Logger LOG = LoggerFactory.getLogger(AccueilCourtierPortletViewController.class);

    @Autowired
    private BaseResource configurationResource;

    @Autowired
    private PortefeuilleRessource portefeuilleRessource;



    @GetMapping("/getCountAd")
    public ResponseEntity<Long> getCountAd() throws Exception {
        //LOG.info("in controller AccueilCourtierPortletViewController");
        ServiceContext serviceContext = ServiceContextThreadLocal.getServiceContext();
        AccueilCourtierConfiguration configuration = new AccueilCourtierConfiguration(
                Sets.newTreeSet(configurationResource.loadConfiguration(serviceContext.getLiferayPortletRequest()).getContent()));
        System.out.println("Configuration TEST" + configuration);

        Long countAD = portefeuilleRessource.getCountAD(serviceContext.getLiferayPortletRequest());
    System.out.println("countAD ="+countAD);
        return new ResponseEntity<Long>(countAD, HttpStatus.OK);
    }

    @GetMapping("/getConfiguration")
    public ResponseEntity<AccueilCourtierConfiguration> getConfig () throws Exception {
        ServiceContext serviceContext = ServiceContextThreadLocal.getServiceContext();
        AccueilCourtierConfiguration configuration = new AccueilCourtierConfiguration(
                Sets.newTreeSet(configurationResource.loadConfiguration(serviceContext.getLiferayPortletRequest()).getContent()));

        return new ResponseEntity<AccueilCourtierConfiguration>(configuration, HttpStatus.OK);
    }

      @GetMapping("/getCountAs")
    public ResponseEntity<Long> getCountAs() throws Exception {

          ServiceContext serviceContext = ServiceContextThreadLocal.getServiceContext();

          Long countAS = portefeuilleRessource.getCountAS(serviceContext.getLiferayPortletRequest());
            System.out.println("countAS ="+countAS);
          return new ResponseEntity<Long>(countAS, HttpStatus.OK );
      }

    @GetMapping("/getCountCc")
    public ResponseEntity<Long> getCountCc() throws Exception {

        ServiceContext serviceContext = ServiceContextThreadLocal.getServiceContext();

        Long countCC = portefeuilleRessource.getCountCC(serviceContext.getLiferayPortletRequest());

        System.out.println("CountCC ="+countCC);
        return new ResponseEntity<Long>(countCC, HttpStatus.OK );
    }

    @GetMapping("/getCountCa")
    public ResponseEntity<Float> getCountCa() throws Exception {

        ServiceContext serviceContext = ServiceContextThreadLocal.getServiceContext();

        Float countCA = portefeuilleRessource.getCountCA(serviceContext.getLiferayPortletRequest());

        System.out.println("CountCA ="+countCA);
        return new ResponseEntity<Float>(countCA, HttpStatus.OK );
    }


}
