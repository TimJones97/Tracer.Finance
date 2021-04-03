let canvas;
let mesh;
let xRotationGlobal = 0;
let yRotationGlobal = 0.1;
let zRotationGlobal = 0;


// New
let xRotate = 0;
let yRotate = 0;
function setup()
{
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0,0); clear();
    
    if(height < width)
      mesh = new Isocahedron(height * 0.3);
    else 
      mesh = new Isocahedron(width * 0.3);
}
function draw()
{
    clear();
    handleRotation();
    orbitControl();
    noFill();
    mesh.draw();
}
// document.addEventListener( 'mousemove', onDocumentMouseMove, false );

// function onDocumentMouseMove( event ) {
//     mouseX = event.clientX - window.innerWidth / 2;
//     mouseY = event.clientY - window.innerHeight / 2;
// }

function handleRotation()
{   
    xRotate =  -mouseY / 500;
    yRotate = mouseX / 500;
    rotateX(xRotate);
    rotateY(yRotate);
    // rotateZ(zRotationGlobal);
  
    xRotationGlobal+= 0.01;
    if(xRotationGlobal >= TWO_PI)
    {
      xRotationGlobal = 0;
    }
}
class Isocahedron
{
    constructor(radius)
    {
        this.radius = radius;

        let goldenRatio = (1 + Math.sqrt(5)) / 2;
        // First angle displacement from north or south pole
        let alpha = 1 / 2; 
        // Second angle displacement from north or south pole
        var beta = 1 / (2 * goldenRatio); 
    
        // Vertices defined by applying the alpha and beta angles
        this.vertices = [
            createVector(  0,  beta, -alpha),
            createVector(  beta,  alpha,  0),
            createVector( -beta,  alpha,  0),
            createVector(  0,  beta,  alpha),
            createVector(  0, -beta,  alpha),
            createVector( -alpha,  0,  beta),
            createVector(  alpha,  0,  beta),
            createVector(  0, -beta, -alpha),
            createVector(  alpha,  0, -beta),
            createVector( -alpha,  0, -beta),
            createVector(  beta, -alpha,  0),
            createVector( -beta, -alpha,  0)
          ];
        
        // Vertices are normalized and multiplied by radius
        this.vertices = this.vertices.map(function(v) { return v.normalize().mult(radius); })
        
        // faces are a set of triangles made up of 3 vertices
        this.faces = [
            [  1,  0,  2 ],
            [  2,  3,  1 ],
            [  4,  3,  5 ],
            [  6,  3,  4 ],
            [  7,  0,  8 ],
            [  9,  0,  7 ],
            [ 10,  4, 11 ],
            [ 11,  7, 10 ],
            [  5,  2,  9 ],
            [  9, 11,  5 ],
            [  8,  1,  6 ],
            [  6, 10,  8 ],
            [  5,  3,  2 ],
            [  1,  3,  6 ],
            [  2,  0,  9 ],
            [  8,  0,  1 ],
            [  9,  7, 11 ],
            [ 10,  7,  8 ],
            [ 11,  4,  5 ],
            [  6,  4, 10 ]
          ];
    }
    draw()
    {
        this.faces.forEach(triangle =>{
            beginShape();
            for(let i = 0; i <= 2; i++)
            {
                stroke(61, 168, 245);
                strokeWeight(2);
                let v = this.vertices[triangle[i]];
                vertex(v.x, v.y, v.z)
            }
            endShape();
        })
    }
}
