    // Point
    MM.Point = function(x, y) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
    };

    MM.Point.prototype = {
        x: 0,
        y: 0,
        toString: function() {
            return "(" + this.x.toFixed(3) + ", " + this.y.toFixed(3) + ")";
        },
        copy: function() {
            return new MM.Point(this.x, this.y);
        }
    };

    // Get the euclidean distance between two points
    MM.Point.distance = function(p1, p2) {
        var dx = (p2.x - p1.x);
        var dy = (p2.y - p1.y);
        return Math.sqrt(dx*dx + dy*dy);
    };

    // Get a point between two other points, biased by `t`.
    MM.Point.interpolate = function(p1, p2, t) {
        var px = p1.x + (p2.x - p1.x) * t;
        var py = p1.y + (p2.y - p1.y) * t;
        return new MM.Point(px, py);
    };
