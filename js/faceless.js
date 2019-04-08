function countWindowHeight(){
	if($(window).height()<($('.mainPartDiv').height()+145)){
		$('html,body').css('height','auto');
	}else{
		$('html,body').css('height','100%');
	}
};

function showDone(){
	if($('.loginFormUnitForm input').val()!=''){
		$('.loginFormUnitForm').fadeOut(500);	
		$('.loginFormUnitDone').fadeIn(500);
	}
};

function validateForm(){
	$('.facelessForm input').each(function(){
		if($(this).val()==""){
			$(this).addClass('inputError').val($(this).attr('errortext'));
		}
	});
	$('.recoverForm input').each(function(){
		if($(this).val()==""){
			$(this).addClass('inputError').val($(this).attr('errortext'));
		}
	});
	$('.loginForm input').each(function(){
		if($(this).val()==""){
			$(this).addClass('inputError').val($(this).attr('errortext'));
		}
	});
	$('.facelessForm textarea').each(function(){
		if($(this).val()==""){
			$(this).addClass('inputError').val($(this).attr('errortext'));
		}
	});
};

$(document).ready(function(){
	// ---------------- mainProperties --------- begin
	
	countWindowHeight();
	
	$(window).resize(function(){
		countWindowHeight();
	});
	
	// ---------------- mainProperties --------- end
	
	// ---------------- FAQ ----------------- begin
	
	$('.faqQuestion span').bind('click',function(){
		if($(this).parent().parent().children(".faqAnswer").height()!=0){
			$(this).parent().parent().children(".faqAnswer").animate({'height':'0px'},300);
		}else{
			$('.faqAnswer').animate({'height':'0px'},300);
			var countHeight=$(this).parent().parent().children(".faqAnswer").children(".faqAnswerText").height()+54;
			console.log(countHeight);
			$(this).parent().parent().children(".faqAnswer").animate({'height':countHeight+'px'},300);	
		}
	});
	
	$('.faqQuestionSubmitButton').bind({
		'mousedown':function(){
			$('.faqQuestionSubmitButton').addClass('faqQuestionSubmitButtonAct');
		},
		'mouseup':function(){
			$('.faqQuestionSubmitButton').removeClass('faqQuestionSubmitButtonAct');
		}			
	});
	
	// ---------------- FAQ ----------------- end
	
	// ---------------- Pricing ----------------- begin
	
	$('.freePremiumDivButtonRadio').live({
		'click':function(){
			$('.freePremiumDivButtonRadioLeft').removeClass('freePremiumDivButtonRadioLeftAct');
			$(this).children('.freePremiumDivButtonRadioLeft').addClass('freePremiumDivButtonRadioLeftAct');
			/*only for .pipetka
			if( $(this).children().hasClass('freePremiumDivButtonRadioLeftAct') ){
			    $('.pipetka').each( function (){ $(this).removeClass('demo') }); 
			    $(this).find('.pipetka').addClass('demo');
			}*/
		}	
	});
	
	// ---------------- Pricing ----------------- end
	
	// ---------------- Download ----------------- begin
	
	$('.downloadDivSelector').bind('click',function(){
		if($('.downloadDivSelector').css('top')=='-79px'){
			$('.downloadDivSelector').animate({'top':'0px'},500,function(){$('.downloadDivSelectorRight').css('background','url(./images/downloadDivSelectorRightTop.png) no-repeat left top');});						
		}else{
			$('.downloadDivSelector').animate({'top':'-79px'},500,function(){$('.downloadDivSelectorRight').css('background','url(./images/downloadDivSelectorRightBot.png) no-repeat left top');});			
		}
	});
	
	// ---------------- Download ----------------- end
	
	// ---------------- Index ----------------- end
	
	var switcherStop="go";
	
	function selfSwitch(){
		if(switcherStop=="go"){
			if($('.indexDiv1IllOnOff').hasClass('indexDiv1IllOn')){
				$('.indexDiv1IllOnOff').removeClass('indexDiv1IllOn').addClass('indexDiv1IllOff');
				$('.indexDiv1Ill').css('background','url(./images/indexIllustrationOff.png) no-repeat left top');
			}else{
				$('.indexDiv1IllOnOff').removeClass('indexDiv1IllOff').addClass('indexDiv1IllOn');
				$('.indexDiv1Ill').css('background','url(./images/indexIllustrationOn.png) no-repeat left top');
			}
		}
		setTimeout(function(){
			selfSwitch();
		},4000);
	}
	
	selfSwitch();
		
	$('.indexDiv1IllOnOff').bind('click',function(){
		if($(this).hasClass('indexDiv1IllOn')){
			$(this).removeClass('indexDiv1IllOn').addClass('indexDiv1IllOff');
			$('.indexDiv1Ill').css('background','url(./images/indexIllustrationColOff.png) no-repeat left top');
		}else{
			$(this).removeClass('indexDiv1IllOff').addClass('indexDiv1IllOn');
			$('.indexDiv1Ill').css('background','url(./images/indexIllustrationColOn.png) no-repeat left top');
		}
	});
	
	$('.indexDiv1Ill').bind({
		'mouseover':function(){
		switcherStop="stop";
		if($('.indexDiv1IllOnOff').hasClass('indexDiv1IllOn')){
			$('.indexDiv1Ill').css('background','url(./images/indexIllustrationColOn.png) no-repeat left top');
		}else{
			$('.indexDiv1Ill').css('background','url(./images/indexIllustrationColOff.png) no-repeat left top');
		}},
		'mouseout':function(){
		switcherStop="go";
		if($('.indexDiv1IllOnOff').hasClass('indexDiv1IllOn')){
			$('.indexDiv1Ill').css('background','url(./images/indexIllustrationOn.png) no-repeat left top');
		}else{
			$('.indexDiv1Ill').css('background','url(./images/indexIllustrationOff.png) no-repeat left top');
		}
		}
	});
	
	$('.illustrationInf').bind({
		'mouseover':function(){
		if($('.indexDiv1IllOnOff').hasClass('indexDiv1IllOn')){
			$(this).children('.illustrationInfToolTipOn').css('display','block');
		}else{
			$(this).children('.illustrationInfToolTipOff').css('display','block');
		}},
		'mouseout':function(){
			$('.illustrationInfToolTip').css('display','none');
		}
	});
	
	// ---------------- Index ----------------- end	
	
});