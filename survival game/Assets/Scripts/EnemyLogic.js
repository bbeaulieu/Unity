#pragma strict

var Health = 100;

function Update () {
	if (Health <= 0){
		Dead();
	}
}

function ApplyDamage(PlayerDamage : int) {
	Health -= PlayerDamage;

}

function Dead () {
	Destroy (gameObject);
}