import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Map "mo:core/Map";

actor {
  type ContactInquiry = {
    name : Text;
    phone : Text;
    email : Text;
    destination : Text;
    travelDate : Text;
    numPassengers : Nat;
    vehicleType : Text;
    message : Text;
  };

  module ContactInquiry {
    public func compare(inquiry1 : ContactInquiry, inquiry2 : ContactInquiry) : Order.Order {
      Text.compare(inquiry1.name, inquiry2.name);
    };
  };

  let inquiries = Map.empty<Nat, ContactInquiry>();
  var nextId = 0;

  public shared ({ caller }) func submitInquiry(
    name : Text,
    phone : Text,
    email : Text,
    destination : Text,
    travelDate : Text,
    numPassengers : Nat,
    vehicleType : Text,
    message : Text,
  ) : async () {
    let inquiry : ContactInquiry = {
      name;
      phone;
      email;
      destination;
      travelDate;
      numPassengers;
      vehicleType;
      message;
    };
    inquiries.add(nextId, inquiry);
    nextId += 1;
  };

  public query ({ caller }) func getAllInquiries() : async [ContactInquiry] {
    inquiries.values().toArray().sort();
  };

  public query ({ caller }) func getTotalInquiriesCount() : async Nat {
    inquiries.size();
  };
};
