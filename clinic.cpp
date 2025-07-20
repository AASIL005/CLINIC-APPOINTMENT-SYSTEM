#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    string name, date;
    getline(cin, name);
    getline(cin, date);

    ofstream file("appointments.txt", ios::app);
    file << name << ", " << date << endl;
    file.close();

    cout << "Appointment saved." << endl;
    return 0;
}
