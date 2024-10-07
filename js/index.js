function toogleFaqQuestion(event) {
    const faqGroupHeading = event.target.closest('.faq-body-heading');
    if (!faqGroupHeading) return;

    const faqParent = faqGroupHeading.parentElement;
    const faqAnswer =  faqParent.querySelector('.faq-answer-body');
    const icon =  faqGroupHeading.querySelector('.fa-solid');
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
    faqAnswer.classList.toggle('open');


    const allFaq = document.querySelectorAll('.faq-group');
    console.log(allFaq);

}

function toggleNavbar(){
    const navBar = document.querySelector('.mobile-menu-items');
    navBar.classList.toggle('active');
}



















