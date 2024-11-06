import { useRef } from "react";

import axios from "axios";

function ValidUsername(str)
{
	let validExceptions = "_";

	for(let i = 0; i < str.length; ++i)
	{
		if(validExceptions.indexOf(str[i]) !== -1)
			continue;

		let charCode = str.charCodeAt(i);
		if(charCode >= 48 && charCode <= 57) // numbers
			continue;

		if(charCode >= 65 && charCode <= 90) // upper case chars
			continue;

		if(charCode >= 97 && charCode <= 122) // lower case chars
			continue;
			
		return false; // if none of the above was found, the string contains invalid characters
	}

	return true;
}

function InputForm({onDataReceived})
{
	let formElem = useRef(null);
	
	function OnError(error_string)
	{
		formElem.current.querySelector("p").innerText = error_string;
	}

	function OnSubmit(event)
	{
		let userInput = formElem.current.querySelector("#user").value;

		if(userInput === "")
			return OnError("Please enter the target user");

		let urlRegex = /https:\/\/www\.linkedin\.com\/in\/([^\/?]*?)\/*(\?.*)?$/; // check if string starts with https://www.linkedin.com/in/ and captures the following text, allowing for a trailing slash and/or query string
		let urlMatch = userInput.match(urlRegex);

		let username = urlMatch === null ? userInput : urlMatch[1];

		if(!ValidUsername(username))
			return OnError("Input contains invalid characters");
		
		axios.get("http://127.0.0.1/get_user_data.php", {
			params: {
				username: username
			}
		}).then(function(response){
			let responseData = response.data;
			if(responseData.status === undefined)			
				return OnError("Request failed");

			if(responseData.status !== 0)
				if(responseData.data === "Internal api call failed") // while the api key is invalid
					return onDataReceived(JSON.parse("{\"urn\":\"ACoAABu9To8BP8xR5-LAKUd_6hruTJpggQIXW48\",\"username\":\"username\",\"firstName\":\"Yogesh\",\"lastName\":\"Kumar\",\"isCreator\":true,\"isOpenToWork\":false,\"isHiring\":false,\"profilePicture\":\"https://media.licdn.com/dms/image/D5603AQHHeiC4RfsaYA/profile-displayphoto-shrink_800_800/0/1668512713493?e=1724284800&v=beta&t=1yNjF6GZz3o53WKhQT473OX-ksct68wC4P4njltDKdI\",\"backgroundImage\":[{\"width\":800,\"height\":200,\"url\":\"https://media.licdn.com/dms/image/C5616AQGbyoDn3-grBw/profile-displaybackgroundimage-shrink_200_800/0/1517498260023?e=1724284800&v=beta&t=MSeF_GXuBKbzd-FCFHexA15AsHfyucrSYZepriRav8w\"},{\"width\":1354,\"height\":338,\"url\":\"https://media.licdn.com/dms/image/C5616AQGbyoDn3-grBw/profile-displaybackgroundimage-shrink_350_1400/0/1517498260272?e=1724284800&v=beta&t=cIO5jZOPryphchdz-GK9QN_muVi85KT1qHzxJ94XI2I\"}],\"summary\":\"ClicktheconnectbuttonandI'lljumponaquickcallwithyou!Staysafeandhaveagreatday.\",\"headline\":\"CertifiedSalesforceExpert|\\nSr.ReactNativeDeveloper\",\"geo\":{\"country\":\"India\",\"city\":\"NewDelhi,Delhi\",\"full\":\"NewDelhi,Delhi,India\"},\"languages\":[{\"name\":\"English\",\"proficiency\":\"NATIVE_OR_BILINGUAL\"},{\"name\":\"Hindi\",\"proficiency\":\"NATIVE_OR_BILINGUAL\"}],\"educations\":[{\"start\":{\"year\":0,\"month\":0,\"day\":0},\"end\":{\"year\":0,\"month\":0,\"day\":0},\"fieldOfStudy\":\"CloudComputing&Analytics\",\"degree\":\"MasterofScience-MS\",\"grade\":\"3.58/4\",\"schoolName\":\"IllinoisInstituteofTechnology\",\"description\":\"\",\"activities\":\"\",\"url\":\"https://www.linkedin.com/school/illinois-tech/\",\"schoolId\":\"6328\"},{\"start\":{\"year\":0,\"month\":0,\"day\":0},\"end\":{\"year\":0,\"month\":0,\"day\":0},\"fieldOfStudy\":\"Computer/InformationTechnologyAdministrationandManagement\",\"degree\":\"BachelorofBusinessAdministration-BBA\",\"grade\":\"A\",\"schoolName\":\"InstituteofManagementStudies,Noida\",\"description\":\"AccountingforLeaders,ManagerialFinance,MarketingStrategies,Leadership&ChangeinOrg,OperationalPlanning&Policy\",\"activities\":\"\",\"url\":\"https://www.linkedin.com/school/institute-of-management-studies-noida/\",\"schoolId\":\"3259388\"}],\"position\":[{\"companyName\":\"Upwork\",\"companyUsername\":\"upwork\",\"companyURL\":\"https://www.linkedin.com/company/upwork/\",\"companyLogo\":\"https://media.licdn.com/dms/image/C4E0BAQFAvA55uI9RQQ/company-logo_400_400/0/1630655510176/upwork_logo?e=1727308800&v=beta&t=I9li7lTm-aYsmAt9AFBgRp160Oei0Bam1fEs7apg54Q\",\"companyIndustry\":\"ComputerSoftware\",\"companyStaffCountRange\":\"501-1000\",\"title\":\"CertifiedSalesforceAdmin,Developer&MarketingOperationsManager\",\"multiLocaleTitle\":{\"en_US\":\"CertifiedSalesforceAdmin,Developer&MarketingOperationsManager\"},\"multiLocaleCompanyName\":{\"en_US\":\"Upwork\"},\"location\":\"UnitedStates\",\"description\":\"✅CertifiedSalesforceDeveloper\\n✅CertifiedSalesforceAdministrator\\n✅CertifiedSalesforceMarketingCloudSpecialist\",\"employmentType\":\"Freelance\",\"start\":{\"year\":2022,\"month\":7,\"day\":0},\"end\":{\"year\":0,\"month\":0,\"day\":0}},{\"companyName\":\"CloudCacheConsulting\",\"companyUsername\":\"cloudcache-consulting\",\"companyURL\":\"https://www.linkedin.com/company/cloudcache-consulting/\",\"companyLogo\":\"https://media.licdn.com/dms/image/D560BAQHGRpM5onQ6_A/company-logo_400_400/0/1667019117410/cloudcache_consulting_logo?e=1727308800&v=beta&t=tcjURuvicawlM7obj9uipoyLN8n4D6HZMfg6Z9vVBLI\",\"companyIndustry\":\"InformationTechnology&Services\",\"companyStaffCountRange\":\"11-50\",\"title\":\"SalesforceAdmin&Developer\",\"multiLocaleTitle\":{\"en_US\":\"SalesforceAdmin&Developer\"},\"multiLocaleCompanyName\":{\"en_US\":\"CloudCacheConsulting\"},\"location\":\"Bengaluru,Karnataka,India\",\"description\":\"•SuccessfullymigratedthebusinessprocessfromMicrosoftCRMtoSalesforceCRM.\\n•DevelopingthenewrequirementonSalesforceasperbusinessneeds.\\n•Analyzedbusinessrequirements,entityrelationshipsandconvertingtoSalesforcecustomobjects.\\n•MaintainingthesecuritylevelandconfigurationonSalesforce.\\n•ImplementedApexTriggersfortop-levelstandardobjectssuchasContacts,andAccounts.\\n•DevelopedVisualForcepagestoimplementcustomfunctionality.\\n•Implementedvariousvalidationrulesandworkflows.\\n•WorkedontheAgileScrummodelaimedatadaptabilityandcustomersatisfaction.\\n•ConfiguredusersecuritypermissionsincompliancewithorganizationalneedstofulfillHIPAArules.\",\"employmentType\":\"Full-time\",\"start\":{\"year\":2019,\"month\":8,\"day\":0},\"end\":{\"year\":2022,\"month\":7,\"day\":0}},{\"companyName\":\"CitrusbugTechnolabs\",\"companyUsername\":\"citrusbug\",\"companyURL\":\"https://www.linkedin.com/company/citrusbug/\",\"companyLogo\":\"https://media.licdn.com/dms/image/C510BAQEVX6JUv4_U3w/company-logo_400_400/0/1630631870725/citrusbug_logo?e=1727308800&v=beta&t=Z_MeRHo3sTL21wSeWeTjACzTT0iwthB52OklO-1vDHM\",\"companyIndustry\":\"InformationTechnology&Services\",\"companyStaffCountRange\":\"51-200\",\"title\":\"ReactNativeDeveloper\",\"multiLocaleTitle\":{\"en_US\":\"ReactNativeDeveloper\"},\"multiLocaleCompanyName\":{\"en_US\":\"CitrusbugTechnolabs\"},\"location\":\"Ahmedabad,Gujarat,India\",\"description\":\"🚀Considermeifyouneedto:\\n-BuildiOS&AndroidMobileappusingReactNative,Flutter,Redux,Expo,Firebase.\\n-BuildRestApiusingNodeJS+FirebaseAdminSDKetc.\\n-BuildServersiderenderedWebAppusingNode.js+React.js+Next.js+Angular.js+Vue.js+Koa.\\n-IntegrateGraphQLorRestApiwithinMobileApp.\\n-IntegrateFirebaseAuth(Email/Pass,Facebook,Google,Twitter).\\n-DesignDatabaseusingCloudFireStore,RealtimeDatabase.\\n-IntegrateStripePaymentGateway.\\n-IntegrateFirebaseRealtimeDatabaseforChatAppImplementation.\\n-LocationTrackingduringdifferentstages/modesofApp.\\n-FirebasePushNotification.\\n-UpgradeReactNativetoMakeAppLive.\\n\\niOSAppDevelopment&AndroidAppDevelopment\\n\\nFrontEnd:JavaScript(ES5andES6)|React|React-Native|Redux|ReactHooks|ReactSaga|ReactFetch|JSX|Sqlite|Realm\\nBackEnd:Node.js|Express|MySQL|PostgreSQL|RESTfulAPIDevelopment|Firebase\\nTesting/Deployment:Mocha|Chai|Jest|Artillery|Loader.io|AmazonAWS|Firebase|Docker\\nDeveloperTools:GitHub|npm|Webpack|AgileMethodology|TDD\",\"employmentType\":\"Full-time\",\"start\":{\"year\":2018,\"month\":6,\"day\":0},\"end\":{\"year\":2019,\"month\":8,\"day\":0}},{\"companyName\":\"Clavax\",\"companyUsername\":\"clavax\",\"companyURL\":\"https://www.linkedin.com/company/clavax/\",\"companyLogo\":\"https://media.licdn.com/dms/image/D560BAQE1HtTWPHZIyQ/company-logo_400_400/0/1703831321503/clavax_logo?e=1727308800&v=beta&t=L4mc1ElzzwCtvmqdeaQKh2wjTr2HIzW_ch1F1dY5P3I\",\"companyIndustry\":\"InformationTechnology&Services\",\"companyStaffCountRange\":\"201-500\",\"title\":\"SeniorBusinessDevelopmentManager\",\"multiLocaleTitle\":{\"en_US\":\"SeniorBusinessDevelopmentManager\"},\"multiLocaleCompanyName\":{\"en_US\":\"Clavax\"},\"location\":\"Gurugram,Haryana,India\",\"description\":\"●Managingonlinebiddingportals–Upwork,formerlyElance–oDesk,Freelancer,Guru,PeoplePerHourandAppFutura.\\n●Identifyingthespecificneedsofcustomers,andthencreatingbespokesolutions.\\n●Responsiblefordrivingbusinessandsalesgrowthbyacquirenewbusinessopportunitiesthrough\\ndifferentchannels.\\n●Responsibleforconvertingtheleadsintobusinessandensuringmonthlytargetsare\\nachieved.\",\"employmentType\":\"Full-time\",\"start\":{\"year\":2017,\"month\":4,\"day\":0},\"end\":{\"year\":2018,\"month\":6,\"day\":0}},{\"companyName\":\"RapidsoftTechnologies-Mobile&WebApplicationDevelopment\",\"companyUsername\":\"rapidsoft-technologies-pvt-ltd-\",\"companyURL\":\"https://www.linkedin.com/company/rapidsoft-technologies-pvt-ltd-/\",\"companyLogo\":\"https://media.licdn.com/dms/image/C510BAQGe1Qnkr8YzNg/company-logo_400_400/0/1631421027631/rapidsoft_technologies_pvt__ltd__logo?e=1727308800&v=beta&t=-IjMCypbv5drgVX84xn0YPmP94t6DaScCsafgAeQjUk\",\"companyIndustry\":\"InformationTechnology&Services\",\"companyStaffCountRange\":\"51-200\",\"title\":\"BusinessDevelopmentManager\",\"multiLocaleTitle\":{\"en_US\":\"BusinessDevelopmentManager\"},\"multiLocaleCompanyName\":{\"en_US\":\"RapidsoftTechnologies-Mobile&WebApplicationDevelopment\"},\"location\":\"Gurugram,Haryana,India\",\"description\":\"Iwashandlingtheresponsibilitiesofmaintainingsteadystreamofrevenueforthe\\norganizationbybringingnewmobilebasedsoftwaredevelopmentprojects.\\n\\n●ManagingthePre-Salesteamtoensureasufficientlyhealthyleadspipelineandfunnel.\\n●FindingalternatesourceofbusinessdevelopmentincludingSEO&Pre-SalesLeads.\\n●GeneratingPre-SalesleadsthroughEmailMarketing.\\n●SubmittingonlineformsononlinedirectorieslikeYelp,Entireweb,Viesearch,andYellowpages.\\n●FindingfreshdatafromGoogleandYahooforEmailMarketing.\\n●AdvertisinginsocialmedianetworksforSEOleads.\",\"employmentType\":\"Full-time\",\"start\":{\"year\":2015,\"month\":10,\"day\":0},\"end\":{\"year\":2017,\"month\":3,\"day\":0}}],\"fullPositions\":[{\"companyName\":\"Upwork\",\"companyUsername\":\"upwork\",\"companyURL\":\"https://www.linkedin.com/company/upwork/\",\"companyLogo\":\"https://media.licdn.com/dms/image/C4E0BAQFAvA55uI9RQQ/company-logo_400_400/0/1630655510176/upwork_logo?e=1727308800&v=beta&t=I9li7lTm-aYsmAt9AFBgRp160Oei0Bam1fEs7apg54Q\",\"companyIndustry\":\"ComputerSoftware\",\"companyStaffCountRange\":\"501-1000\",\"title\":\"CertifiedSalesforceAdmin,Developer&MarketingOperationsManager\",\"multiLocaleTitle\":{\"en_US\":\"CertifiedSalesforceAdmin,Developer&MarketingOperationsManager\"},\"multiLocaleCompanyName\":{\"en_US\":\"Upwork\"},\"location\":\"UnitedStates\",\"description\":\"✅CertifiedSalesforceDeveloper\\n✅CertifiedSalesforceAdministrator\\n✅CertifiedSalesforceMarketingCloudSpecialist\",\"employmentType\":\"Freelance\",\"start\":{\"year\":2022,\"month\":7,\"day\":0},\"end\":{\"year\":0,\"month\":0,\"day\":0}},{\"companyName\":\"CloudCacheConsulting\",\"companyUsername\":\"cloudcache-consulting\",\"companyURL\":\"https://www.linkedin.com/company/cloudcache-consulting/\",\"companyLogo\":\"https://media.licdn.com/dms/image/D560BAQHGRpM5onQ6_A/company-logo_400_400/0/1667019117410/cloudcache_consulting_logo?e=1727308800&v=beta&t=tcjURuvicawlM7obj9uipoyLN8n4D6HZMfg6Z9vVBLI\",\"companyIndustry\":\"InformationTechnology&Services\",\"companyStaffCountRange\":\"11-50\",\"title\":\"SalesforceAdmin&Developer\",\"multiLocaleTitle\":{\"en_US\":\"SalesforceAdmin&Developer\"},\"multiLocaleCompanyName\":{\"en_US\":\"CloudCacheConsulting\"},\"location\":\"Bengaluru,Karnataka,India\",\"description\":\"•SuccessfullymigratedthebusinessprocessfromMicrosoftCRMtoSalesforceCRM.\\n•DevelopingthenewrequirementonSalesforceasperbusinessneeds.\\n•Analyzedbusinessrequirements,entityrelationshipsandconvertingtoSalesforcecustomobjects.\\n•MaintainingthesecuritylevelandconfigurationonSalesforce.\\n•ImplementedApexTriggersfortop-levelstandardobjectssuchasContacts,andAccounts.\\n•DevelopedVisualForcepagestoimplementcustomfunctionality.\\n•Implementedvariousvalidationrulesandworkflows.\\n•WorkedontheAgileScrummodelaimedatadaptabilityandcustomersatisfaction.\\n•ConfiguredusersecuritypermissionsincompliancewithorganizationalneedstofulfillHIPAArules.\",\"employmentType\":\"Full-time\",\"start\":{\"year\":2019,\"month\":8,\"day\":0},\"end\":{\"year\":2022,\"month\":7,\"day\":0}},{\"companyName\":\"CitrusbugTechnolabs\",\"companyUsername\":\"citrusbug\",\"companyURL\":\"https://www.linkedin.com/company/citrusbug/\",\"companyLogo\":\"https://media.licdn.com/dms/image/C510BAQEVX6JUv4_U3w/company-logo_400_400/0/1630631870725/citrusbug_logo?e=1727308800&v=beta&t=Z_MeRHo3sTL21wSeWeTjACzTT0iwthB52OklO-1vDHM\",\"companyIndustry\":\"InformationTechnology&Services\",\"companyStaffCountRange\":\"51-200\",\"title\":\"ReactNativeDeveloper\",\"multiLocaleTitle\":{\"en_US\":\"ReactNativeDeveloper\"},\"multiLocaleCompanyName\":{\"en_US\":\"CitrusbugTechnolabs\"},\"location\":\"Ahmedabad,Gujarat,India\",\"description\":\"🚀Considermeifyouneedto:\\n-BuildiOS&AndroidMobileappusingReactNative,Flutter,Redux,Expo,Firebase.\\n-BuildRestApiusingNodeJS+FirebaseAdminSDKetc.\\n-BuildServersiderenderedWebAppusingNode.js+React.js+Next.js+Angular.js+Vue.js+Koa.\\n-IntegrateGraphQLorRestApiwithinMobileApp.\\n-IntegrateFirebaseAuth(Email/Pass,Facebook,Google,Twitter).\\n-DesignDatabaseusingCloudFireStore,RealtimeDatabase.\\n-IntegrateStripePaymentGateway.\\n-IntegrateFirebaseRealtimeDatabaseforChatAppImplementation.\\n-LocationTrackingduringdifferentstages/modesofApp.\\n-FirebasePushNotification.\\n-UpgradeReactNativetoMakeAppLive.\\n\\niOSAppDevelopment&AndroidAppDevelopment\\n\\nFrontEnd:JavaScript(ES5andES6)|React|React-Native|Redux|ReactHooks|ReactSaga|ReactFetch|JSX|Sqlite|Realm\\nBackEnd:Node.js|Express|MySQL|PostgreSQL|RESTfulAPIDevelopment|Firebase\\nTesting/Deployment:Mocha|Chai|Jest|Artillery|Loader.io|AmazonAWS|Firebase|Docker\\nDeveloperTools:GitHub|npm|Webpack|AgileMethodology|TDD\",\"employmentType\":\"Full-time\",\"start\":{\"year\":2018,\"month\":6,\"day\":0},\"end\":{\"year\":2019,\"month\":8,\"day\":0}},{\"companyName\":\"Clavax\",\"companyUsername\":\"clavax\",\"companyURL\":\"https://www.linkedin.com/company/clavax/\",\"companyLogo\":\"https://media.licdn.com/dms/image/D560BAQE1HtTWPHZIyQ/company-logo_400_400/0/1703831321503/clavax_logo?e=1727308800&v=beta&t=L4mc1ElzzwCtvmqdeaQKh2wjTr2HIzW_ch1F1dY5P3I\",\"companyIndustry\":\"InformationTechnology&Services\",\"companyStaffCountRange\":\"201-500\",\"title\":\"SeniorBusinessDevelopmentManager\",\"multiLocaleTitle\":{\"en_US\":\"SeniorBusinessDevelopmentManager\"},\"multiLocaleCompanyName\":{\"en_US\":\"Clavax\"},\"location\":\"Gurugram,Haryana,India\",\"description\":\"●Managingonlinebiddingportals–Upwork,formerlyElance–oDesk,Freelancer,Guru,PeoplePerHourandAppFutura.\\n●Identifyingthespecificneedsofcustomers,andthencreatingbespokesolutions.\\n●Responsiblefordrivingbusinessandsalesgrowthbyacquirenewbusinessopportunitiesthrough\\ndifferentchannels.\\n●Responsibleforconvertingtheleadsintobusinessandensuringmonthlytargetsare\\nachieved.\",\"employmentType\":\"Full-time\",\"start\":{\"year\":2017,\"month\":4,\"day\":0},\"end\":{\"year\":2018,\"month\":6,\"day\":0}},{\"companyName\":\"RapidsoftTechnologies-Mobile&WebApplicationDevelopment\",\"companyUsername\":\"rapidsoft-technologies-pvt-ltd-\",\"companyURL\":\"https://www.linkedin.com/company/rapidsoft-technologies-pvt-ltd-/\",\"companyLogo\":\"https://media.licdn.com/dms/image/C510BAQGe1Qnkr8YzNg/company-logo_400_400/0/1631421027631/rapidsoft_technologies_pvt__ltd__logo?e=1727308800&v=beta&t=-IjMCypbv5drgVX84xn0YPmP94t6DaScCsafgAeQjUk\",\"companyIndustry\":\"InformationTechnology&Services\",\"companyStaffCountRange\":\"51-200\",\"title\":\"BusinessDevelopmentManager\",\"multiLocaleTitle\":{\"en_US\":\"BusinessDevelopmentManager\"},\"multiLocaleCompanyName\":{\"en_US\":\"RapidsoftTechnologies-Mobile&WebApplicationDevelopment\"},\"location\":\"Gurugram,Haryana,India\",\"description\":\"Iwashandlingtheresponsibilitiesofmaintainingsteadystreamofrevenueforthe\\norganizationbybringingnewmobilebasedsoftwaredevelopmentprojects.\\n\\n●ManagingthePre-Salesteamtoensureasufficientlyhealthyleadspipelineandfunnel.\\n●FindingalternatesourceofbusinessdevelopmentincludingSEO&Pre-SalesLeads.\\n●GeneratingPre-SalesleadsthroughEmailMarketing.\\n●SubmittingonlineformsononlinedirectorieslikeYelp,Entireweb,Viesearch,andYellowpages.\\n●FindingfreshdatafromGoogleandYahooforEmailMarketing.\\n●AdvertisinginsocialmedianetworksforSEOleads.\",\"employmentType\":\"Full-time\",\"start\":{\"year\":2015,\"month\":10,\"day\":0},\"end\":{\"year\":2017,\"month\":3,\"day\":0}}],\"skills\":[{\"name\":\"BusinessDevelopment\",\"passedSkillAssessment\":false},{\"name\":\"BusinessStrategy\",\"passedSkillAssessment\":false},{\"name\":\"CustomerSatisfaction\",\"passedSkillAssessment\":false},{\"name\":\"CustomerRelationshipManagement(CRM)\",\"passedSkillAssessment\":false,\"endorsementsCount\":76},{\"name\":\"Salesforce.com\",\"passedSkillAssessment\":false,\"endorsementsCount\":33},{\"name\":\"NewBusinessDevelopment\",\"passedSkillAssessment\":false},{\"name\":\"ProjectManagement\",\"passedSkillAssessment\":false},{\"name\":\"TeamManagement\",\"passedSkillAssessment\":false,\"endorsementsCount\":93},{\"name\":\"SalesManagement\",\"passedSkillAssessment\":false},{\"name\":\"CRM\",\"passedSkillAssessment\":false},{\"name\":\"LeadGeneration\",\"passedSkillAssessment\":false},{\"name\":\"Management\",\"passedSkillAssessment\":false},{\"name\":\"ProjectPlanning\",\"passedSkillAssessment\":false},{\"name\":\"DigitalMarketing\",\"passedSkillAssessment\":false},{\"name\":\"MobileApplicationDevelopment\",\"passedSkillAssessment\":false},{\"name\":\"E-commerce\",\"passedSkillAssessment\":false},{\"name\":\"WebsiteDevelopment\",\"passedSkillAssessment\":false},{\"name\":\"Leadership\",\"passedSkillAssessment\":false,\"endorsementsCount\":98},{\"name\":\"BusinessAnalysis\",\"passedSkillAssessment\":false,\"endorsementsCount\":92},{\"name\":\"Sales\",\"passedSkillAssessment\":false,\"endorsementsCount\":92},{\"name\":\"BusinessPlanning\",\"passedSkillAssessment\":false,\"endorsementsCount\":90},{\"name\":\"Pre-sales\",\"passedSkillAssessment\":false,\"endorsementsCount\":90},{\"name\":\"BespokeWebsiteDesign\",\"passedSkillAssessment\":false,\"endorsementsCount\":82},{\"name\":\"SalesProcess\",\"passedSkillAssessment\":false,\"endorsementsCount\":86},{\"name\":\"ColdCalling\",\"passedSkillAssessment\":false,\"endorsementsCount\":68},{\"name\":\"Entrepreneurship\",\"passedSkillAssessment\":false,\"endorsementsCount\":69},{\"name\":\"Start-ups\",\"passedSkillAssessment\":false,\"endorsementsCount\":64},{\"name\":\"CustomerService\",\"passedSkillAssessment\":false,\"endorsementsCount\":66},{\"name\":\"OperationsManagement\",\"passedSkillAssessment\":false,\"endorsementsCount\":63},{\"name\":\"RequirementsGathering\",\"passedSkillAssessment\":false,\"endorsementsCount\":60},{\"name\":\"MarketResearch\",\"passedSkillAssessment\":false,\"endorsementsCount\":57},{\"name\":\"StrategicPlanning\",\"passedSkillAssessment\":false,\"endorsementsCount\":54},{\"name\":\"ProjectDelivery\",\"passedSkillAssessment\":false,\"endorsementsCount\":56},{\"name\":\"ProjectEstimation\",\"passedSkillAssessment\":false,\"endorsementsCount\":55},{\"name\":\"WebApplications\",\"passedSkillAssessment\":false,\"endorsementsCount\":54},{\"name\":\"Advertising\",\"passedSkillAssessment\":false,\"endorsementsCount\":54},{\"name\":\"EnterpriseResourcePlanning(ERP)\",\"passedSkillAssessment\":false,\"endorsementsCount\":53},{\"name\":\"SoftwareDevelopment\",\"passedSkillAssessment\":false,\"endorsementsCount\":50},{\"name\":\"ProjectCoordination\",\"passedSkillAssessment\":false,\"endorsementsCount\":52},{\"name\":\"MobileTechnology\",\"passedSkillAssessment\":false,\"endorsementsCount\":52},{\"name\":\"UserInterfaceDesign\",\"passedSkillAssessment\":false,\"endorsementsCount\":50},{\"name\":\"Negotiation\",\"passedSkillAssessment\":false,\"endorsementsCount\":50},{\"name\":\"PublicRelations\",\"passedSkillAssessment\":false,\"endorsementsCount\":50},{\"name\":\"BusinessRequirements\",\"passedSkillAssessment\":false,\"endorsementsCount\":49},{\"name\":\"RequirementsAnalysis\",\"passedSkillAssessment\":false,\"endorsementsCount\":50},{\"name\":\"ProductDevelopment\",\"passedSkillAssessment\":false,\"endorsementsCount\":47},{\"name\":\"ProblemSolving\",\"passedSkillAssessment\":false,\"endorsementsCount\":46},{\"name\":\"Testing\",\"passedSkillAssessment\":false,\"endorsementsCount\":48},{\"name\":\"SoftwareasaService(SaaS)\",\"passedSkillAssessment\":false,\"endorsementsCount\":30},{\"name\":\"CloudComputing\",\"passedSkillAssessment\":false,\"endorsementsCount\":32}],\"givenRecommendation\":null,\"givenRecommendationCount\":0,\"receivedRecommendation\":null,\"receivedRecommendationCount\":0,\"courses\":[{\"name\":\"EnglishSpeakingCoursefromBritishSchoolofLanguage(BSL)\",\"number\":\"DNWL0916\"},{\"name\":\"InformationSecurityRiskManagement\",\"number\":\"ITC8261\"},{\"name\":\"InformationSecurityTechnology\",\"number\":\"ITC7830\"}],\"certifications\":[{\"name\":\"SalesforceCertifiedAdvancedAdministrator\",\"start\":{\"year\":2019,\"month\":10,\"day\":0},\"end\":{\"year\":0,\"month\":0,\"day\":0},\"authority\":\"Salesforce\",\"company\":{\"name\":\"Salesforce\",\"universalName\":\"salesforce\",\"logo\":\"https://media.licdn.com/dms/image/C560BAQHZ9xYomLW7zg/company-logo_200_200/0/1630658255326/salesforce_logo?e=1727308800&v=beta&t=tRjEhUJ_OEXognmnjkTnY2pnBzgXp5ZQ5-kPX8g9HqQ\",\"staffCountRange\":{},\"headquarter\":{}},\"timePeriod\":{\"start\":{\"year\":0,\"month\":0,\"day\":0},\"end\":{\"year\":0,\"month\":0,\"day\":0}}},{\"name\":\"SalesforceCertifiedMarketingCloudSpecialist\",\"start\":{\"year\":2019,\"month\":9,\"day\":0},\"end\":{\"year\":0,\"month\":0,\"day\":0},\"authority\":\"Salesforce\",\"company\":{\"name\":\"Salesforce\",\"universalName\":\"salesforce\",\"logo\":\"https://media.licdn.com/dms/image/C560BAQHZ9xYomLW7zg/company-logo_200_200/0/1630658255326/salesforce_logo?e=1727308800&v=beta&t=tRjEhUJ_OEXognmnjkTnY2pnBzgXp5ZQ5-kPX8g9HqQ\",\"staffCountRange\":{},\"headquarter\":{}},\"timePeriod\":{\"start\":{\"year\":0,\"month\":0,\"day\":0},\"end\":{\"year\":0,\"month\":0,\"day\":0}}},{\"name\":\"TroubleshootingNetworkConnectivity\",\"start\":{\"year\":2019,\"month\":7,\"day\":0},\"end\":{\"year\":0,\"month\":0,\"day\":0},\"authority\":\"LinkedIn\",\"company\":{\"name\":\"LinkedIn\",\"universalName\":\"linkedin\",\"logo\":\"https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_200_200/0/1638831590218/linkedin_logo?e=1727308800&v=beta&t=_9tGqoQZYZKB0zDmZEnhi8KT42rlR5gfn3s2K9xbeqo\",\"staffCountRange\":{},\"headquarter\":{}},\"timePeriod\":{\"start\":{\"year\":0,\"month\":0,\"day\":0},\"end\":{\"year\":0,\"month\":0,\"day\":0}}}],\"honors\":[{\"title\":\"BestEmployeeoftheMonth\",\"description\":\"HighestSalesTargetAchievedinTheMonthofSeptember\",\"issuer\":\"ClavaxCommunity\",\"issuerLogo\":\"https://media.licdn.com/dms/image/D560BAQE1HtTWPHZIyQ/company-logo_400_400/0/1703831321503/clavax_logo?e=1727308800&v=beta&t=L4mc1ElzzwCtvmqdeaQKh2wjTr2HIzW_ch1F1dY5P3I\",\"issuedOn\":{\"year\":2018,\"month\":9,\"day\":0}},{\"title\":\"BestEmployeeoftheMonth\",\"description\":\"HighestSalesTargetAchievedinTheMonthofOctober\",\"issuer\":\"RapidsoftCommunity\",\"issuerLogo\":\"https://media.licdn.com/dms/image/C510BAQGe1Qnkr8YzNg/company-logo_400_400/0/1631421027631/rapidsoft_technologies_pvt__ltd__logo?e=1727308800&v=beta&t=-IjMCypbv5drgVX84xn0YPmP94t6DaScCsafgAeQjUk\",\"issuedOn\":{\"year\":2016,\"month\":10,\"day\":0}}],\"projects\":{\"total\":3,\"items\":[{\"title\":\"CityUnionBank\",\"description\":\"•PreparedaplantopreventfutureattacksandprovidedrecommendationsinDataBreachInvestigations.\\n•Developedandimplementarevitalizedworkplanreducingcomplianceandsecuritycostsby18%.\",\"start\":{\"year\":2021,\"month\":4,\"day\":0},\"end\":{\"year\":2021,\"month\":10,\"day\":0},\"contributors\":[{\"urn\":\"ACoAABu9To8BP8xR5-LAKUd_6hruTJpggQIXW48\",\"username\":\"username\",\"fullName\":\"YogeshKumar\",\"firstName\":\"Yogesh\",\"lastName\":\"Kumar\",\"profilePicture\":[{\"width\":100,\"height\":100,\"url\":\"https://media.licdn.com/dms/image/D5603AQHHeiC4RfsaYA/profile-displayphoto-shrink_100_100/0/1668512713493?e=1724284800&v=beta&t=Fd25d19VSi15e8rQmVqe1VfmpfGQ-mJq5eHMRCyuSVY\"},{\"width\":200,\"height\":200,\"url\":\"https://media.licdn.com/dms/image/D5603AQHHeiC4RfsaYA/profile-displayphoto-shrink_200_200/0/1668512713493?e=1724284800&v=beta&t=meV6SgtfWCoCBubRhcxARMvkEoDF2jpTFFJQ1oOcpZk\"},{\"width\":400,\"height\":400,\"url\":\"https://media.licdn.com/dms/image/D5603AQHHeiC4RfsaYA/profile-displayphoto-shrink_400_400/0/1668512713493?e=1724284800&v=beta&t=CtFyurjtrhDTjmFiiFaf-7o2ydVQW1LEEY-5B5f4F5Q\"},{\"width\":800,\"height\":800,\"url\":\"https://media.licdn.com/dms/image/D5603AQHHeiC4RfsaYA/profile-displayphoto-shrink_800_800/0/1668512713493?e=1724284800&v=beta&t=1yNjF6GZz3o53WKhQT473OX-ksct68wC4P4njltDKdI\"}],\"headline\":\"CertifiedSalesforceExpert|\\nSr.ReactNativeDeveloper\",\"url\":\"https://www.linkedin.com/in/username\"}]},{\"title\":\"HealthCaseStudy(CommunityHospital)\",\"description\":\"•Performedriskassessmentstohelpcreateoptimalpreventionandmanagementplans.\\n•Makerecommendationsformitigatingtheidentifiedrisk.\\n•Researched,plannedandimplementedbusinessprocessandtechnicalcontrolsthatreduceddataloss.\\n•Developedandmanagedriskscenariosbasedonthenetworkdetailsprovided\\n•Assessedtheincomingthreatsandvulnerabilitiesanddevelopedplanstoclosetheloopholes\",\"start\":{\"year\":2020,\"month\":8,\"day\":0},\"end\":{\"year\":2020,\"month\":12,\"day\":0},\"contributors\":[{\"urn\":\"ACoAABu9To8BP8xR5-LAKUd_6hruTJpggQIXW48\",\"username\":\"username\",\"fullName\":\"YogeshKumar\",\"firstName\":\"Yogesh\",\"lastName\":\"Kumar\",\"profilePicture\":[{\"width\":100,\"height\":100,\"url\":\"https://media.licdn.com/dms/image/D5603AQHHeiC4RfsaYA/profile-displayphoto-shrink_100_100/0/1668512713493?e=1724284800&v=beta&t=Fd25d19VSi15e8rQmVqe1VfmpfGQ-mJq5eHMRCyuSVY\"},{\"width\":200,\"height\":200,\"url\":\"https://media.licdn.com/dms/image/D5603AQHHeiC4RfsaYA/profile-displayphoto-shrink_200_200/0/1668512713493?e=1724284800&v=beta&t=meV6SgtfWCoCBubRhcxARMvkEoDF2jpTFFJQ1oOcpZk\"},{\"width\":400,\"height\":400,\"url\":\"https://media.licdn.com/dms/image/D5603AQHHeiC4RfsaYA/profile-displayphoto-shrink_400_400/0/1668512713493?e=1724284800&v=beta&t=CtFyurjtrhDTjmFiiFaf-7o2ydVQW1LEEY-5B5f4F5Q\"},{\"width\":800,\"height\":800,\"url\":\"https://media.licdn.com/dms/image/D5603AQHHeiC4RfsaYA/profile-displayphoto-shrink_800_800/0/1668512713493?e=1724284800&v=beta&t=1yNjF6GZz3o53WKhQT473OX-ksct68wC4P4njltDKdI\"}],\"headline\":\"CertifiedSalesforceExpert|\\nSr.ReactNativeDeveloper\",\"url\":\"https://www.linkedin.com/in/username\"}]},{\"title\":\"PatientHealthcareSystem\",\"description\":\"•Devised&constructedanERmodelfeaturingdifferentfunctionalitiesrelatedtopatientvaryingfromgettingadmitted,medicationdetails,familyhistoryandsurrogatedetailsetc.\\n\\n•Planned&developedaformusingSalesforcestandardandcustomobjectstoeasetheuserexperienceaftermakingitfortheemployeestoenterthepatientdetailsfromthefrontend.InserteddatathroughbackendinSalesforcebyusingdataloader.\",\"start\":{\"year\":2020,\"month\":2,\"day\":0},\"end\":{\"year\":2020,\"month\":5,\"day\":0},\"contributors\":[{\"urn\":\"ACoAABu9To8BP8xR5-LAKUd_6hruTJpggQIXW48\",\"username\":\"username\",\"fullName\":\"YogeshKumar\",\"firstName\":\"Yogesh\",\"lastName\":\"Kumar\",\"profilePicture\":[{\"width\":100,\"height\":100,\"url\":\"https://media.licdn.com/dms/image/D5603AQHHeiC4RfsaYA/profile-displayphoto-shrink_100_100/0/1668512713493?e=1724284800&v=beta&t=Fd25d19VSi15e8rQmVqe1VfmpfGQ-mJq5eHMRCyuSVY\"},{\"width\":200,\"height\":200,\"url\":\"https://media.licdn.com/dms/image/D5603AQHHeiC4RfsaYA/profile-displayphoto-shrink_200_200/0/1668512713493?e=1724284800&v=beta&t=meV6SgtfWCoCBubRhcxARMvkEoDF2jpTFFJQ1oOcpZk\"},{\"width\":400,\"height\":400,\"url\":\"https://media.licdn.com/dms/image/D5603AQHHeiC4RfsaYA/profile-displayphoto-shrink_400_400/0/1668512713493?e=1724284800&v=beta&t=CtFyurjtrhDTjmFiiFaf-7o2ydVQW1LEEY-5B5f4F5Q\"},{\"width\":800,\"height\":800,\"url\":\"https://media.licdn.com/dms/image/D5603AQHHeiC4RfsaYA/profile-displayphoto-shrink_800_800/0/1668512713493?e=1724284800&v=beta&t=1yNjF6GZz3o53WKhQT473OX-ksct68wC4P4njltDKdI\"}],\"headline\":\"CertifiedSalesforceExpert|\\nSr.ReactNativeDeveloper\",\"url\":\"https://www.linkedin.com/in/username\"}]}]},\"volunteering\":[{\"title\":\"Member\",\"start\":{\"year\":2019,\"month\":7,\"day\":0},\"end\":{\"year\":0,\"month\":0,\"day\":0},\"companyName\":\"OWASP®Foundation\",\"CompanyId\":\"250673\",\"companyUrl\":\"https://www.linkedin.com/company/250673\",\"companyLogo\":\"https://media.licdn.com/dms/image/D560BAQGQfRxMsnFs5Q/company-logo_400_400/0/1709740993906/owasp_logo?e=1727308800&v=beta&t=YNwNjAZMTF4dXGLj-Tv-qSskXqOzPHMdlgSkhkOs2d8\"}],\"supportedLocales\":[{\"country\":\"US\",\"language\":\"en\"}],\"multiLocaleFirstName\":{\"en\":\"Yogesh\"},\"multiLocaleLastName\":{\"en\":\"Kumar\"},\"multiLocaleHeadline\":{\"en\":\"CertifiedSalesforceExpert|\\nSr.ReactNativeDeveloper\"}}"));
				else
					return OnError("Request failed with message - " + responseData.data);
			
			formElem.current.querySelector("p").innerText = "";
			onDataReceived(responseData.data);
		}).catch(function(error){
			return OnError(error.code + " - " + error.message);
		});
	}

	return (
		<div ref={formElem}>
			<label>User Input (Name or URL): </label><br/>
			<input type="text" id="user"/><br/>
			<button onClick={OnSubmit}>Submit</button><br/>
			<p style={{color: "red"}}></p>
		</div>
	);
}

export default InputForm;