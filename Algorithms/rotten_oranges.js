/**
 * @param {number[][]} grid
 * @return {number}
 */

// https://leetcode.com/problems/rotting-oranges/


var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let fresh =0;
    let time=-1; 
    let queue=[];

    const infect =(row,col)=>{
        if(row <0 || col<0 || row>=rows || col >=cols || grid[row][col]==0) return
        if(grid[row][col]==1){
            fresh--;
            grid[row][col]=2;
            queue.push([row,col]);
        }
        return;
    }

    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(grid[i][j]==1) fresh++;
            if(grid[i][j]==2) queue.push([i,j])
        }
    }
    if(queue.length==0 && fresh==0) return 0;

    while(queue.length>0){
        const len = queue.length;
        time++;
        for(i=0;i<len;i++){
            const rot = queue.shift();
            infect(rot[0],rot[1]+1);
            infect(rot[0]+1,rot[1]);
            infect(rot[0]-1,rot[1]);
            infect(rot[0],rot[1]-1);

        }
    }

    if(fresh>0) return -1;
    return time;
    
};