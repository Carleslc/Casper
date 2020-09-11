var readingProgress = function(contentArea, progressBar) {
    var content = document.querySelector(contentArea);
    var progress = document.querySelector(progressBar);

    var updateProgress = function() {
        var contentBox = content.getBoundingClientRect();
        var midPoint = window.innerHeight / 2;

        if (contentBox.top > midPoint) {
            progress.value = 0;
        }

        if (contentBox.top < midPoint) {
            progress.value = progress.max;
        }

        if (contentBox.top <= midPoint && contentBox.bottom >= midPoint) {
            progress.value = (progress.max * Math.abs(contentBox.top - midPoint)) / contentBox.height;
        }
    };

    if (progress) {
        window.addEventListener("scroll", updateProgress);
    }
};

readingProgress(".post-full-content", ".reading-progress-bar");
