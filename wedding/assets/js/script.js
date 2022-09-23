$(document).ready(function () {
    var duration = 10 * 1000;
    var animationEnd = Date.now() + duration;
    var skew = 1;

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    (function frame() {
        var timeLeft = animationEnd - Date.now();
        var ticks = Math.max(200, 500 * (timeLeft / duration));
        skew = Math.max(0.8, skew - 0.001);
        // go Buckeyes!
        var colors = ['#FFCDD2', '#F8BBD0', '#D1C4E9'];
        var shapes = ['circle', 'circle', 'square'];
        var ticks  = 50;
        confetti({
            particleCount: 1,
            startVelocity: 0,
            ticks: ticks,
            origin: {
                x: Math.random(),
                // since particles fall down, skew start toward the top
                y: (Math.random() * skew) - 0.2
            },
            colors: ['#FFCDD2'],
            shapes: ['circle'],
            gravity: 1,
            scalar: randomInRange(1.4, 1.7),
            drift: randomInRange(-0.4, 0.4)
        });

        confetti({
            particleCount: 1,
            startVelocity: 0,
            ticks: ticks,
            origin: {
                x: Math.random(),
                // since particles fall down, skew start toward the top
                y: (Math.random() * skew) - 0.2
            },
            colors: ['#F8BBD0'],
            shapes: ['circle'],
            gravity: 1,
            scalar: randomInRange(1.4, 1.7),
            drift: randomInRange(-0.4, 0.4)
        });

        confetti({
            particleCount: 1,
            startVelocity: 0,
            ticks: ticks,
            origin: {
                x: Math.random(),
                // since particles fall down, skew start toward the top
                y: (Math.random() * skew) - 0.2
            },
            colors: ['#D1C4E9'],
            shapes: ['square'],
            gravity: 1,
            scalar: randomInRange(1.4, 1.7),
            drift: randomInRange(-0.4, 0.4)
        });

        if (timeLeft > 0) {
            requestAnimationFrame(frame);
        }
    }());

});