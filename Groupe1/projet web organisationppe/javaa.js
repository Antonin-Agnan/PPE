 function Lundi()
	  {
		   document.getElementById("dLundi").style.display = "block";
		   document.getElementById("noSOS").style.display = "none";  
		   document.getElementById("SOS").style.display = "none"; 
		   document.getElementById("dMardi").style.display = "none";
		   document.getElementById("dInscription").style.display = "none";
		   document.getElementById("dMercredi").style.display = "none";
		   document.getElementById("dJeudi").style.display = "none";
		   document.getElementById("dJeudi").style.display = "none";
           document.getElementById("total").style.display = "block";
           document.getElementById("tableau").style.display = "none";		   
		
	  }
	  
	  function SOSoui()
	  {
		   document.getElementById("dLundi").style.display = "block";
		   document.getElementById("noSOS").style.display = "none"; 
           document.getElementById("SOS").style.display = "block";

		
	  }
 function SOSnon()
      {
	      document.getElementById("dLundi").style.display = "block";
          document.getElementById("noSOS").style.display = "block";
          document.getElementById("SOS").style.display = "none"; 	
	  }

function Mardi()
{
	      document.getElementById("dLundi").style.display = "none";
		  document.getElementById("dMardi").style.display = "block";
		  document.getElementById("noSOSMardi").style.display = "none";  
		  document.getElementById("SOSMardi").style.display = "none"; 
		  document.getElementById("dJeudi").style.display = "none";
		  document.getElementById("dInscription").style.display = "none";
		  document.getElementById("dMercredi").style.display = "none";
		     document.getElementById("total").style.display = "block";
			            document.getElementById("tableau").style.display = "none";	
}
function SOSouiMardi()
{
	      document.getElementById("dMardi").style.display = "block";
		  document.getElementById("noSOSMardi").style.display = "none"; 
          document.getElementById("SOSMardi").style.display = "block";


}
function SOSnonMardi()
{
		  document.getElementById("dMardi").style.display = "block";
          document.getElementById("noSOSMardi").style.display = "block";
          document.getElementById("SOSMardi").style.display = "none"; 	


}


function Mercredi()
{
		  document.getElementById("dMercredi").style.display = "block";
		  document.getElementById("dLundi").style.display = "none";
		  document.getElementById("dMardi").style.display = "none";
		  document.getElementById("dInscription").style.display = "none"; 
		   document.getElementById("dJeudi").style.display = "none";
		      document.getElementById("total").style.display = "block";
			             document.getElementById("tableau").style.display = "none";	
}

function ouiTuteurMercredi()
{
		  document.getElementById("dMercredi").style.display = "block";

}
function nonTuteurMercredi()
{
		  document.getElementById("dMercredi").style.display = "block";
}

function Jeudi ()
{
		   document.getElementById("dLundi").style.display = "none";
		   
		   document.getElementById("dMardi").style.display = "none";
		   document.getElementById("dInscription").style.display = "none";
		   document.getElementById("dMercredi").style.display = "none";
		 	 document.getElementById("jeudi_4").style.display = "none";
			 document.getElementById("jeudi_2").style.display = "none";
			   document.getElementById("total").style.display = "block";
		   document.getElementById("dJeudi").style.display = "block";
		              document.getElementById("tableau").style.display = "none";	
}
function par4Jeudi()
{
	 document.getElementById("dJeudi").style.display = "block";
	 document.getElementById("jeudi_4").style.display = "block";
	   document.getElementById("noSOSJeudi_4").style.display = "none"; 
	    document.getElementById("SOSJeudi_4").style.display = "none";
}

function SOSouiJeudi_4()
{
	      document.getElementById("dJeudi").style.display = "block";
		  document.getElementById("noSOSJeudi_4").style.display = "none"; 
          document.getElementById("SOSJeudi_4").style.display = "block";


}
function SOSnonJeudi_4()
{
	  document.getElementById("dJeudi").style.display = "block";
		  document.getElementById("noSOSJeudi_4").style.display = "block"; 
          document.getElementById("SOSJeudi_4").style.display = "none";
		   document.getElementById("nonEquipeJeudi").style.display = "none";
		    document.getElementById("ouiEquipeJeudi").style.display = "none";
}

function ouiEquipeJeudi()
{
	 document.getElementById("nonEquipeJeudi").style.display = "none";
	   document.getElementById("ouiEquipeJeudi").style.display = "block"; 
}

function nonEquipeJeudi()
{
	 document.getElementById("ouiEquipeJeudi").style.display = "none";
	   document.getElementById("nonEquipeJeudi").style.display = "block"; 
}

function par2Jeudi()
{
	document.getElementById("dJeudi").style.display = "block";
	 document.getElementById("jeudi_2").style.display = "block";
	   document.getElementById("SOSJeudi_2").style.display = "none"; 
	    document.getElementById("noSOSJeudi_2").style.display = "none";
}

function SOSouiJeudi_2()
{
	  document.getElementById("dJeudi").style.display = "block";
		  document.getElementById("noSOSJeudi_2").style.display = "none"; 
          document.getElementById("SOSJeudi_2").style.display = "block";
}

function SOSnonJeudi_2()
{
		  document.getElementById("dJeudi").style.display = "block";
		  document.getElementById("noSOSJeudi_2").style.display = "block"; 
          document.getElementById("SOSJeudi_2").style.display = "none";
}

function Inscriptions()
{
	 document.getElementById("dInscription").style.display = "block";
	 document.getElementById("dLundi").style.display = "none";
	 document.getElementById("dMardi").style.display = "none";
	 document.getElementById("dMercredi").style.display = "none";
	    document.getElementById("total").style.display = "block";
		   document.getElementById("dJeudi").style.display = "none";
		              document.getElementById("tableau").style.display = "none";	
}
function tableau()
{
	 document.getElementById("dInscription").style.display = "none";
	 document.getElementById("dLundi").style.display = "none";
	 document.getElementById("dMardi").style.display = "none";
	 document.getElementById("dMercredi").style.display = "none";
	 document.getElementById("total").style.display = "block";
     document.getElementById("dJeudi").style.display = "none";
     document.getElementById("tableau").style.display = "block";
 document.getElementById("dInscription1").style.display = "block";	 
	
}
