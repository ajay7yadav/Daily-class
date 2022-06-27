   class Node {
        constructor(value){
            this.data = value;
            this.next = null;
        }
    }
    
    let head1 = new Node(1);
    let h = new Node(3);
    let h1 = new Node(8);
    let h2 = new Node(10);
    let h3 = new Node(16);
    let h4 = new Node(25);
    let h5 = new Node(40);
    let h6 = new Node(75);
    head1.next = h;
    h.next = h1;
    h1.next = h2;
    h2.next = h3;
    h3.next = h4;
    h4.next = h5;
    h5.next = h6;
    let head2 = new Node(2);
    let a = new Node(5);
    let a1 = new Node(7);
    let a2 = new Node(12);
    let a3 = new Node(15);
    let a4 = new Node(20);
    let a5 = new Node(70);
    let a6 = new Node(80);
    head2.next = a;
    a.next = a1;
    a1.next = a2;
    a2.next = a3;
    a3.next = a4;
    a4.next = a5;
    a5.next = a6;

    function margeSort(head1, head2){
        let link = new Node(-1);
        let tail = link;
        let n1 = head1;
        let n2 = head2;
        while(n1 == null &&  n2 == null){
            if(n1.data <= n2.data){
                tail.next = n1;
                n1 = n1.next;
            }
            else{
                tail.next = n2;
                n2 = n2.next;
            }
        }
        if(n1 == null){
            return tail.next = n2;
        }
        else{
            tail.next = n1;
        }

        return link.next; 
    }

    console.log(margeSort(head1,head2));;