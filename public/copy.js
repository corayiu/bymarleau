var phrases = [
	"Hi, I'm Marleau. I cut and colour hair. I make art too. ",
	"Hi I’m Marleau. I’ve been working with hair for upwards of 20 years, and my clients agree that they always leave with what they want. I also have a visual art practice that informs my work as a hairstylist.",
	"Welcome. I’m Marleau. Close your eyes for a moment and imagine you have hair you love, a voice whispers, “you look amazing today.” This could be your experience after seating yourself in my chair.<br><br>I’ve been cutting and colouring hair for 20 years; I work with curly, wavy, fine, thick, short and long hair using atypical or classical techniques to elicit unfussed, wearable hair. I use in depth consultation to get acquainted with you, your hair type, and your ideas, to help you feel incredible. My recent experience in both New York and Berlin equipped me with fresh new skills to complement my enthusiasm for hair styling. I’m also a visual artist, playwright, and performer, and draw from my creative practice to be a better hairstylist.",
	"Hi, I'm Marleau. My recent experience in both New York and Berlin equipped me with fresh new skills to complement my enthusiasm for hair styling. I’m also an artist. In NYC, I spent a short and impactful time at Salon Ruggeri in Manhattan's Murray Hill. There I learned advanced highlighting techniques under the virtuosic, Greg Ruggeri.<br><br>My time in Berlin renewed my interest in cutting as an art form. I worked alongside an exceptionally talented crew of stylists at L'Atelier Salon in Kreuzberg and was especially inspired by lead stylist and owner, Julie Monin's attention to detail and shape.<br><br>I draw and paint and can be found on instagram under the handle, penciltense. I also used to produce + direct theatre. This deep creative practice and curiosity with the offbeat and unique informs my practice as a hairstylist. ",
]

$("input").on("input", function () {
	var value = $(this).val()

	var phrase = phrases[value]

	$("div.phrase").html(phrase)
})
