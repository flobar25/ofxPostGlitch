#version 150

uniform sampler2DRect tex0;
uniform int imgWidth,imgHeight;
uniform float rand;
uniform int flags;
uniform vec2 blur_vec;
int flgs;
float pix_w,pix_h;

in vec2 varyingtexcoord;
out vec4 outputColor;

void main (void)
{
    pix_w = 1.0;
    pix_h = 1.0;
    flgs = flags;
    
    vec2 texCoord = vec2(varyingtexcoord.x, varyingtexcoord.y);
    vec4 col = texture(tex0, texCoord);
    vec4 col_s = texture(tex0, texCoord + vec2(floor(sin(varyingtexcoord.y/30.0*rand+rand*rand))*30.0*rand,0));
    
    col = col_s;
    
	outputColor = col.rgba;
}
